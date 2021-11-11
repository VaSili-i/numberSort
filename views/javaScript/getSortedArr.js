
//добавляем индефикатор для каждый кнопки для отслеживания на какой именно кнопке произошло событие
    let sortedButton = document.getElementsByClassName('sortedButton');
    let iId = 0;
    for( let elem of sortedButton) {
      elem.dataset.id = iId++;
    }

let strElem = document.getElementsByClassName('arr')

let nomer;

        function getSort(e){
          console.log(e.target.dataset.id)
          nomer = e.target.dataset.id; //выносим переменную в глобальное лексическое окружение
          console.log(nomer)

        let str = strElem[nomer].innerHTML; //получаем строку из необходимого тега вида [ 3, 3, 4, 2,]
        console.log(str)
        str = str.slice(1, str.length - 1); //удаляем лишние скобки []
        console.log(str)
        let arr = str.split(", ");  
        //сортировка пузырьком
              for(let j = arr.length; j > 0; j--){
        for(let i = 0; i < j; i++){
          if(+arr[i] > +arr[i + 1]){ //преобразуем в число
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp
          }
        }
      }
      arrSorted = arr;
    }

 //   let arrSorted = getSort(strElem);

    function createElementArr(e){
      console.log(arrSorted)
      let div = document.createElement('div')
      div.innerHTML = arrSorted;
      strElem[nomer].after(div)
      e.target.remove()
    }

//добавляем обработчик для события

    sortedButton = document.getElementsByClassName('sortedButton');
    for(let int of sortedButton){
    int.addEventListener('click', getSort)
    int.addEventListener('click', createElementArr)
    }