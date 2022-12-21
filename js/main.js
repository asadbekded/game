const elList = document.querySelector('.js-list');
const elText = document.querySelector('.js-title');
const elGameBox = document.querySelector('.content-car');
const elGameBtn = document.querySelector('.game-start');
const elSelGame = document.querySelector('.js-sel');
const elSelTime = document.querySelector('.time-sel');
const elResCount = document.querySelector('.js-count');
const elTime = document.querySelector('.js-time');
const elExit = document.querySelector('.js-exit');

let newDom = [];
let ball = 0;

const itemFragment = document.createDocumentFragment()
const resultCar = (arr,node) => {
   arr.forEach((car) => {
      newItem = document.createElement("li");
      newImg = document.createElement("img");

      newImg.src = car.arrayImg;
      newImg.width = 180
      newImg.height = 170

      newItem.setAttribute('class', 'item');
      newItem.dataset.id = car.id
      
      newItem.appendChild(newImg);
      itemFragment.appendChild(newItem);
   })
   node.appendChild(itemFragment);
}

let gameTitle = (arr, node) => {
   arr.forEach((el) => {
      let data = arr[Math.floor(Math.random() * arr.length)];
      node.setAttribute('data-id', data.id);
      node.textContent = data.name;
   });
}

elGameBtn.addEventListener('click', function() {
   elGameBtn.style.display = 'none';
   elSelGame.style.display = 'none';
   document.body.style.backgroundImage = 'none';
   document.body.style.overflow = 'scroll';
   document.body.style.backgroundColor = '#0b3eb5c6';
   elResCount.style.display = 'block';
   elTime.style.display = 'block';
   elExit.style.display = 'block';

   // if (elSelGame.value == 'Beginer') {
   //    for (i = 0; i < 10; i++) {
   //       if (newDom.includes(array[Math.floor(Math.random() * array.length)])) {
   //          i--;
   //       } else {
   //          newDom.push(array[Math.floor(Math.random() * array.length)]);
   //       }
   //    }
   //    resultCar(newDom, elList);
   //    gameTitle(newDom, elText);
   // }
   if (elSelGame.value == 'Beginer') {
      for (i = 0; i < 10; i++) {
         if (newDom[i] != array[i]) {
            newDom.push(array[Math.floor(Math.random() * array.length)]);
         }
      }
      resultCar(newDom, elList);
      gameTitle(newDom, elText);
   };
   
   if (elSelGame.value == 'Medium') {
      for (i = 0; i < 20; i++) {
         if (newDom[i] != array[i]) {
            newDom.push(array[Math.floor(Math.random() * array.length)]);
         }
      }
      resultCar(newDom, elList);
      gameTitle(newDom, elText);
   };
   
   if (elSelGame.value == 'Hard') {
      for (i = 0; i < 30; i++) {
         if (newDom[i] != array[i]) {
            newDom.push(array[Math.floor(Math.random() * array.length)]);
         }
      }
      resultCar(newDom, elList);
      gameTitle(newDom, elText);
   };

   if (elSelGame.value == 'Expert') {
      for (i = 0; i < 40; i++) {
         if (newDom[i] != array[i]) {
            newDom.push(array[Math.floor(Math.random() * array.length)]);
         }
      }
      resultCar(newDom, elList);
      gameTitle(newDom, elText);
   };

   let interVal = setInterval(() => {
      elTime.textContent--
   }, 1000)
   setInterval(() => {
      clearInterval(interVal)
      setTimeout(() => {
         elGameBox.style.display = 'none';
         document.body.style.backgroundImage = `url("../image/game-over.jpg")`;
         document.body.style.backgroundRepeat = 'no-repeat';
         document.body.style.backgroundSize = 'cover';
         setTimeout(() => {
            window.location.reload();
         }, 4000);
      }, 2000);
   }, 200000);
});

elExit.addEventListener('click', function() {
   window.location.reload();
});

elList.addEventListener('click', function (evt) {
   if(evt.target.matches('.item')) {
		if(evt.target.dataset.id == elText.dataset.id) {
			newDom.forEach((element) => {
				if (element.id == evt.target.dataset.id) {
					let ded = newDom.findIndex((item) => item == element);
					newDom.splice(ded, 1);
					gameTitle(newDom, elText);
				}
			});
			evt.target.style.backgroundColor = 'green';
         elResCount.textContent = `BALL : ${ball += 3}`;
			setTimeout(() => {
				evt.target.style.visibility = 'hidden';
			}, 1000);
			if(!newDom.length) {
				setTimeout(() => {
					elGameBox.style.display = 'none';
					document.body.style.backgroundImage = `url("../image/game-win.jpg")`;
               document.body.style.backgroundRepeat = 'no-repeat';
               document.body.style.backgroundSize = 'cover';
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				}, 2000);
			};
		} else{
			evt.target.style.backgroundColor = 'red';
         elResCount.textContent = `BALL : ${ball -= 1}`;
		}
	};
});