import { JSDOM, DOMWindow } from 'jsdom'

const dom = new JSDOM(`<!DOCTYPE html>
<head>
  <title>document title</title>
  <style>
    .square{
      width:100px;
      height:200px;
      background-color:red;
      display:block;
    }
  </style>
</head>
<body>
  <p>first paragraph</p>
  <p>second paragraph</p>
  <div class="square"></div>
  <form>
    <input type="file" id="file"/>
  </form>
</body>
`);

const { window } = dom
const { document: doc } = window

export { window, doc, JSDOM, DOMWindow }

describe('jsdom', () => it('works', () => {
  expect('jsdom').toBe('jsdom')
}))