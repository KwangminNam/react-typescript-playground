// Get the image api path.

export function getImagePath(id:string,format?:string){
  return `https://image.tmdb.org/t/p/${format ? format:"original"}/${id}`
}