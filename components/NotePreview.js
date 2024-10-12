import {marked} from 'marked'
import sanitizeHtml from 'sanitize-html'

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3'
])
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ['alt', 'src']
  }
)

export default function NotePreview({ children }) {
  return (
    <div className="note-preview">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(children || ''), {//这里是用了一个库，将markdown转化为html，然后用sanitizeHtml将html中的不安全内容清除掉
                                                        //所以能够直接读取markdown内容进行展示
            allowedTags,
            allowedAttributes
          })
        }}
      />
    </div>
  )
}