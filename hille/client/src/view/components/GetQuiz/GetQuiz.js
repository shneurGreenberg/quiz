import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddQuizData } from '../../../redux/actions/quizAction'


function GetQuiz() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchAddQuizData())
    }, [])

    console.log(state.quizReducer.quizData)


    return (
        <div>
            250
        </div>
    )
}

export default GetQuiz
