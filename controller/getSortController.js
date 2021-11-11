let Numbers = require('../model/modelSaveNumber.js')

class SortController{

	async getNumber(req, res) {
		try{
			let allNumber = await Numbers.findAll({raw: true})
			

			res.render('getNumberDate.hbs', {
				allNumber
			})
		}catch(e){
			console.log(e)
}
	}

		async postNumber(req, res) {
		try{
			const {first = 0, second, third, fourth, fifth, sixth} = req.body;
			const numbers = {
				first,
				second,
				third,
				fourth,
				fifth,
				sixth,
			};
			//проверка значений на undefined
			for(let numb in numbers ){
				if(!isFinite(numbers[numb]) || numbers[numb] === ""){
					numbers[numb] = 0
			}else{
				numbers[numb] = +numbers[numb]
			}
		}

			await Numbers.create(numbers)
			let sortedNumb = [];
			for(let i in numbers){
				sortedNumb.push(+numbers[i])
			}
			console.log(numbers)
			//сортировка пузырьком
			for(let j = sortedNumb.length; j > 0; j--){
				for(let i = 0; i < j; i++){
					if(sortedNumb[i] > sortedNumb[i + 1]){
						let temp = sortedNumb[i];
						sortedNumb[i] = sortedNumb[i + 1];
						sortedNumb[i + 1] = temp
					}
				}
			}
	console.log(sortedNumb)
			return res.render('sendSortedArr.hbs',{
				sortedNumb
				})
		}catch(e){
			console.log(e)
		}
	}

	async getSortedArr(req, res){
		try{
			
		}catch(e){
			console.log(e)
		}
	}
}

module.exports = new SortController()