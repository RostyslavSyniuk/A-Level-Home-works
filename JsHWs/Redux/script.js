// function createStore(reducer) {
//   let state = reducer(undefined, {}); //стартовая инициализация состояния, запуск редьюсера со state === undefined
//   let cbs = []; //массив подписчиков

//   const getState = () => state; //функция, возвращающая переменную из замыкания
//   const subscribe = (cb) => (
//     cbs.push(cb), //запоминаем подписчиков в массиве
//     () => (cbs = cbs.filter((c) => c !== cb))
//   ); //возвращаем функцию unsubscribe, которая удаляет подписчика из списка

//   const dispatch = (action) => {
//     const newState = reducer(state, action); //пробуем запустить редьюсер
//     if (newState !== state) {
//       //проверяем, смог ли редьюсер обработать action
//       state = newState; //если смог, то обновляем state
//       for (let cb of cbs) cb(); //и запускаем подписчиков
//     }
//   };

//   return {
//     getState, //добавление функции getState в результирующий объект
//     dispatch,
//     subscribe, //добавление subscribe в объект
//   };
// }

function reducer(state, { type, ШО, СКОКА }) {
  //объект action деструктуризируется на три переменных
  if (!state) {
    //начальная уборка в ларьке:
    return {
      пиво: 100,
      чипсы: 100,
      сиги: 100,
    };
  }
  console.log(state)
  if (type === "КУПИТЬ") {
    //если тип action - КУПИТЬ, то:
    return {
      ...state, //берем все что было из ассортимента
      [ШО]: state[ШО] - СКОКА, //и уменьшаем то, что покупается на количество
    };
  }
  return state; //если мы не поняли, что от нас просят в `action` - оставляем все как есть
}
