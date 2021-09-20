
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), '/public/images')

export function getSortedPostsData() {
  // Get file names under /photos
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".jpeg" from file name to get id
    const id = fileName.replace(/\.jpg$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    
    // Combine the data with the id
    return {
      id,
      ...fullPath
    }
  })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.jpg$/, '')
      }
    }
  })
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.jpg`)

  // Combine the data with the id
  return {
    id,
    ...fullPath
  }
}