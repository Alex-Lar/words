import { writeFile } from 'node:fs/promises'
import { FileExtension } from '../types'

/**
 * Asynchronous function for creating files with a certain type of extension (for example, ".json")
 *
 * @param name - the file name without extension (such as index)
 * @param ext - The file extension (if any) such as '.html'
 * @param data - the data to be written to a file
 */
export async function createFile(name: string, ext: FileExtension, data: string): Promise<void> {
  try {
    await writeFile(`${name + ext}`, data)
  } catch (e) {
    console.log('Error: ', e)
  }
}
