import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'categoryTitle'
})

export class CategoryTitlePipe implements PipeTransform {


  transform(currentCategory: string, ...args: unknown[]): string {

    let splitted = currentCategory.split("#"); 

    return splitted[1];

  }

}
