import { SourceRow } from '../../interfaces/source.interface'
import { exceptionList } from '../../source'

export const indexImportContent = (): string => {
  let indexFileData = ''
  exceptionList.forEach((exception: SourceRow) => {
    indexFileData += `import ${exception.name} from './${exception.name}.gen'
`
  })
  return indexFileData
}

export const indexExportContent = (): string => {
  let lastExportLine = 'export { '
  exceptionList.forEach((exception: SourceRow, index) => {
    lastExportLine += `${exception.name}`
    if (index !== exceptionList.length - 1) {
      lastExportLine += ', '
    } else {
      lastExportLine += ' }'
    }
  })
  return lastExportLine
}
