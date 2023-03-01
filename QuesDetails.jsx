import  React from 'react'
import { useParams } from 'react-router-dom'


const QuesDetails=() => {

    const { id } =useParams()

    var questionList= [{
        _id:'1',
        votes:3,
        noOfAnswers:2,
        questionTitle:"what is function ",
        questionBody:"it meant to be",
        questionTags: ["java","java script","react js","HTML"],
        userPosted:"mano",
        askedOn:"jan 1"
    },{
        _id:'2',
        votes:0,
        noOfAnswers:0,
        questionTitle:"what is function ",
        questionBody:"it meant to be",
        questionTags: ["java","react js"],
        userPosted:"mano",
        askedOn:"jan 1"

    },{
        _id:'3',
        votes:1,
        noOfAnswers:0,
        questionTitle:"what is function ",
        questionBody:"it meant to be",
        questionTags: ["java","react js"],
        userPosted:"mano",
        askedOn:"jan 1"

   }]
    return(
        <div className='question-details-page'>
            {
            questionList===null?
            <h1>Loading....</h1> :
            <>
            {
            questionList.filter(question => question._id===id).map(question(
                <div key={question._id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container-2'>
                            <div className='question-votes'>
                                <p>{question.votes}</p>

                            </div>

                        </div>

                    </section>

                </div>
            )) 
            }

            </>
           }
        </div>
    )
}

export default QuesDetails