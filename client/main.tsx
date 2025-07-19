import { prettify } from 'htmlfy'
import { StrictMode, useEffect, useState, type CSSProperties } from 'react'
import { createRoot } from 'react-dom/client'
import { createEditor, type BaseEditor } from 'slate'
import { HistoryEditor, withHistory } from 'slate-history'
import {
  Editable,
  ReactEditor,
  Slate,
  useSlate,
  useSlateSelection,
  useSlateStatic,
  withReact,
} from 'slate-react'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const initialValue = [{ children: [{ text: '' }] }]

function App() {
  const [editor] = useState(() => withReact(withHistory(createEditor())))

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Controls />
      <Editable id="editable" placeholder="Tap here to edit..." />
      <InspectSlate />
      <InspectSelection />
      <InspectHtml />
    </Slate>
  )
}

function Controls() {
  const editor = useSlateStatic()
  const [replaceValue, setReplaceValue] = useState('')
  const [replaceSelection, setReplaceSelection] = useState('')

  const refresh = () => window.location.reload()

  useEffect(() => {
    if (replaceValue && replaceSelection) {
      try {
        editor.children = JSON.parse(replaceValue)
        editor.selection = JSON.parse(replaceSelection)
        editor.operations = []
        editor.history.undos = []
        editor.history.redos = []
        editor.onChange()
        setTimeout(() => ReactEditor.focus(editor))
      } catch {}
    }
  }, [replaceValue, replaceSelection])

  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>
        <button type="button" onClick={refresh}>
          Refresh
        </button>
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <input
          type="text"
          value={replaceValue}
          id="replace-value"
          aria-label="Replace value"
          placeholder="Replace value"
          onChange={(event) => setReplaceValue(event.target.value)}
        />{' '}
        <input
          type="text"
          value={replaceSelection}
          id="replace-selection"
          aria-label="Replace selection"
          placeholder="Replace selection"
          onChange={(event) => setReplaceSelection(event.target.value)}
        />
      </div>
    </>
  )
}

const preStyles: CSSProperties = {
  background: '#eee',
  border: '1px solid lightgrey',
  padding: '1rem',
  borderRadius: '0.25rem',
  marginTop: '0.5rem',
  overflowX: 'auto',
}

function InspectSlate() {
  const editor = useSlate()

  return (
    <pre id="inspect-slate" style={preStyles}>
      {JSON.stringify(editor.children, null, 2)}
    </pre>
  )
}

function InspectSelection() {
  const selection = useSlateSelection()

  return (
    <pre id="inspect-selection" style={preStyles}>
      {JSON.stringify(selection, null, 2)}
    </pre>
  )
}

function InspectHtml() {
  const editor = useSlateStatic()
  const [html, setHtml] = useState('')

  useEffect(() => {
    const editable = ReactEditor.toDOMNode(editor, editor)!
    const updateHtml = () => setHtml(editable.outerHTML)
    const observer = new MutationObserver(updateHtml)

    observer.observe(editable, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    })

    updateHtml()

    return () => observer.disconnect()
  }, [])

  return (
    <pre id="inspect-html" style={preStyles}>
      {prettify(html)}
    </pre>
  )
}
