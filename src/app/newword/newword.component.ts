import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newword',
  templateUrl: './newword.component.html',
  styleUrls: ['./newword.component.scss']
})
export class NewwordComponent implements OnInit {
  forgot = true;
  en = 'English';
  imgUrl = 'https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg';
  imgUrl1 = 'https://bkc.edu.vn/wp-content/uploads/2019/12/English-graphic-2.jpg';
  imgUrl2 = 'https://ejoy-english.com/blog/wp-content/uploads/2018/10/image.png';
  filterStatus = 'XEM_TAT_CA';
  newEn = '';
  newVn = '';
  isShowFrom = false;
  arrWords = [
      { id: 1, en: 'action', vn: 'hành động', memorized: true },
      { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
      { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
      { id: 4, en: 'active', vn: 'chủ động', memorized: true },
      { id: 5, en: 'bath', vn: 'tắm', memorized: false },
      { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addWord()
    {
        this.arrWords.unshift( {
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
        } );
        this.newEn = '';
        this.newVn = '';
        this.isShowFrom = false;
  }
  removeWord(id: number)
    {
        const index = this.arrWords.findIndex( e => e.id === id );
        this.arrWords.splice(index, 1 );
    }
  getShowStatus( memorized: boolean)
    {
        const ifAll = this.filterStatus === 'XEM_TAT_CA';
        const ifGreen = this.filterStatus === 'XEM_GREEN' && memorized;
        const ifRed = this.filterStatus === 'XEM_RED' && !memorized;
        return ifAll || ifGreen || ifRed;
    }
}
