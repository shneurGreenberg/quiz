import axios from 'axios';

export const addQuizData = (data) => ({
    type: "ADD_QUIZ_DATA",
    payload: data
})


// export const deleteUser = (id) => ({
//     type: "DELETE_USER",
//     payload: {
//         id: id
//     }
// })


// export const car = (numCar) => ({
//     type: "CAR",
//     payload: {
//         numCar: numCar
//     }
// })


// export function fetchCarNumber(idCar) {
//     return (dispatch) => {
//         axios
//             .get(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${idCar}`)
//             .then(res => {
//                 console.log(res.data)
//                 dispatch(car('4635868'))
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

// }


export function fetchAddQuizData() {
    return (dispatch) => {
        axios.get('/getQuiz')
            .then(res => {
                dispatch(addQuizData(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}