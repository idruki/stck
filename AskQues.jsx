import  React from 'react'
import './AskQues.css'


const AskQues=() => {
   
    return(
            <div className='ask-ques'>
                <div className=' ask-ques-container'>
                    <h1>Ask a public question</h1>
                    <form>
                        <div className='ask-form-container'>
                            <label htmlFor="ask-ques-title">
                                <h4>title</h4>
                                <p>Be specific and imagine you are asking to another person</p>
                            <input type="text"  id="ask-ques-title" placeholder='eg.is here an R function ?'/>
                            </label>

                            <label htmlFor="ask-ques-body">
                                <h4>body</h4>
                                <p>Include all the info related to question</p>
                            <textarea name="body " id="ask-ques-body" cols="30"></textarea>
                            
                            </label>

                            <label htmlFor="ask-ques-tags">
                                <h4>tags</h4>
                                <p>Add up to 5 tags to decide what your ques is about</p>
                            <input type="text"  id="ask-ques-tags" placeholder='html typescript '/>
                            </label>
                        </div>
                        <input type="submit" className="review-btn" value="Review your ques."/>
                    </form>
                    </div>
            </div>
    )
}

export default AskQues