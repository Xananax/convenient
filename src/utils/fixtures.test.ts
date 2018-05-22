import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<!DOCTYPE html>
<head>
  <title>document title</title>
</head>
<body>
  <p>first paragraph</p>
  <p>second paragraph</p>
  <form>
    <input type="file" id="file"/>
  </form>
</body>
`);

const { window } = dom
const { document: doc } = window

export { window, doc }

describe('jsdom', () => it('works', () => {
  expect('jsdom').toBe('jsdom')
}))