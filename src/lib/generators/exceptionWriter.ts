import fs from 'fs'
import path from 'path'

import { SourceRow } from '../interfaces/source.interface'
import { exceptionList } from '../source'
import { derivedExceptionContent } from './content/derived.content'
import { indexExportContent, indexImportContent } from './content/index.content'

/** write individual code file for each error */
exceptionList.forEach((exception: SourceRow) => {
  fs.writeFile(
    path.resolve(__dirname, `../exceptions/${exception.name}.gen.ts`),
    derivedExceptionContent(exception),
    (err: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Generated derived exception ${exception.name}`)
      }
    },
  )
})

const indexJsImportLines = indexImportContent()
const indexJSExportLines = indexExportContent()

const finalIndexFile = `${indexJsImportLines}
${indexJSExportLines}
`

fs.writeFile(path.resolve(__dirname, '../exceptions/index.ts'), finalIndexFile, () => {
  console.log('Index updated')
})
