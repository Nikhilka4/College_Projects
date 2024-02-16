import React from 'react';
import './Results.css';
import FloatLabelDemo from './DropDown';

const Results = () => {
    return (
        <>
            <main>
                <div className='box'>
                    <div className='top'></div>
                    {/* <div className='black-top'></div> */}
                    <form>
                        <div className="semester">
                            <FloatLabelDemo />
                        </div>
                    </form>
                </div>
                

                {/* <div className="reg-no">
                    <input type="text" id="register-number" placeholder="Reg. number" />
                </div>
                <div className="get-results-btn">
                    <button>Get Results</button>
                </div>
            </form>
        </div >
        </div >

    <div className="results">
        <h1>Result notifications will be displayed here...</h1>
    </div> */}
    </main >
    </>
  )
}

export default Results;