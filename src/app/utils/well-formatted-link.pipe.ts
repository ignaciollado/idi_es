import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wellFormattedLink'
})
export class WellFormattedLinkPipe implements PipeTransform {

  transform(theLink: string, ...args: unknown[]): string {
    console.log(theLink)
    theLink=theLink.replaceAll('index.php?option=com_content&amp;view=article&amp;id=',"idi-level-one/")
    theLink=theLink.replaceAll('&amp;catid=','/')
    theLink=theLink.replaceAll('&amp;lang=',',{lang:"ab"}')
    return theLink
  }

}
