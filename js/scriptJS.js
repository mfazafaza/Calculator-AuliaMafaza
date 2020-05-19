let prevNumber=''
let calculationOperator=''
let currentNumber='0'

const inputNumber=(number)=>{
	if (currentNumber === '0'){
		currentNumber=number
	}else{
	currentNumber +=number
    }
}

const calculatorScreen=document.querySelector('.calculator-screen')

const updateScreen=(number)=>{
	calculatorScreen.value=number
}
//mengambil Element Html di code Java script
const numbers=document.querySelectorAll(".number")

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})


const operators=document.querySelectorAll(".operator")

operators.forEach((operator)=> {
  operator.addEventListener("click",(event)=>{
     inputOperator(event.target.value)
  })
})

const inputOperator=(operator)=>{
	if(calculationOperator===''){
	    prevNumber=currentNumber
     }	
	calculationOperator=operator
	currentNumber='0'
}

const equalSign=document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

//mendefinisikan function calculator
const calculate=()=>{
	let result=''
	switch(calculationOperator){
	 case "+":
		result=parseFloat(prevNumber)+parseFloat(currentNumber)
		break
	 case "-":
		result=prevNumber-currentNumber
		break	
	 case "*":
		result=prevNumber*currentNumber
		break
	 case "/":
		result=prevNumber/currentNumber
		break
	case "%":
		result=(currentNumber)/100
		break
	 default:
	    break
	}
	currentNumber=result
	calculationOperator=''
}

//Ambil element Button dan Tambahkan Click Event
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click',()=>{
	clearAll()
	updateScreen(currentNumber)
})

//Definisi dan Jalankan Function ClearAll
const clearAll=()=>{
	prevNumber=''
	calculationOperator=''
	currentNumber='0'
}

//tambah click Event ke Element <button>
const decimal=document.querySelector('.decimal')

decimal.addEventListener('click',(event)=>{
	
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

//definisi dan jalankan function inputDecimal
inputDecimal=(dot)=>{
	if(currentNumber.includes('.')){
		return
	}
	currentNumber +=dot
}

const percent=document.querySelector('.percentage')

percent.addEventListener('click',()=>{
   hitungpersen()
   updateScreen(currentNumber)
   //console.log('percentage yang di klik')	
})

const hitungpersen = ()=>{
	let result2=''
	result2=(currentNumber)/100
	currentNumber=result2
}
