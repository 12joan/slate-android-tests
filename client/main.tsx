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
      <InspectHtml />
    </Slate>
  )
}

function Controls() {
  const refresh = () => window.location.reload()

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <button type="button" onClick={refresh}>
        Refresh
      </button>
    </div>
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
