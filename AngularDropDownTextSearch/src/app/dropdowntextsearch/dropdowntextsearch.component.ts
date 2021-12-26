import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdowntextsearch',
  templateUrl: './dropdowntextsearch.component.html',
  styleUrls: ['./dropdowntextsearch.component.scss']
})
export class DropdowntextsearchComponent implements OnInit {

  @Input() formCtrl: FormControl = new FormControl;
  @Input() inputData: any[] = [];
  @Input() filterOptions: any[] = [];  

  @ViewChild('searchmatType') searchmatType!: ElementRef;

  textSearchInputControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  clearFormInput() {
    this.searchmatType.nativeElement.focus();
    this.searchmatType.nativeElement.value = '';
    this.filterOptions = this.inputData;
  }

  resetDropDownSearchFilter() {
    if (this.filterOptions.length === 0) { this.filterOptions = this.inputData; }
  }

  clearTextSearch(event: any) {
    event.stopPropagation();
    this.textSearchInputControl.patchValue('');
    this.filterOptions = this.inputData;
  }

  search(query: Event): void {

    const keyValue = (query.target as HTMLInputElement).value;
    if (keyValue !== null) {
      let filteredList = this.autoSearchFilter(keyValue, this.formCtrl);
      this.filterOptions = filteredList;
    }

  }

  private autoSearchFilter(query: string, formControl: FormControl) {
    let filteredList = this.inputData.filter(
      option => option.value.toString().toLowerCase().indexOf(query.toLowerCase()) > -1);

    if (formControl.value !== undefined && formControl.value !== null && formControl.value !== '') {

      formControl.value.map((item: any, index: number) => {
        const tempIndex = filteredList.findIndex(c => c.key.toString().toLowerCase() === item.key.toLowerCase());
        if (tempIndex < 0) {
          filteredList.push(formControl.value[index]);
        }
      });

    }
    return filteredList;
  }


}
