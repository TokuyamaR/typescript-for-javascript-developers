import axios from 'axios';

export {};


let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

axios.get(url)
  .then(function (response) {
    interface Article { // 独自の型を自作することができる
      id: number,
      title: string,
      description: string,
    }
    let data: Article[] = response.data;
    data = [
      {
        id: 1,
        title: 'title',
        description: 'description'
      }
    ]
    console.log(data);
  })