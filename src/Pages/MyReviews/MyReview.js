import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(()=>{
        fetch(`http://localhost:5000/myreview?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setReview(data);
          setRefresh(!refresh);
        })
    },[user.email, refresh ] );
    
    return (
      <div className="container mx-auto min-h-screen">
        {review.length === 0 ? (
          <>
            <div>
              <p className="text-center text-5xl font-semibold mt-20">
                No Review Given Yet!!
              </p>
              <p className="text-center text-3xl font-semibold mt-20">
                <span className='text-color-b'>Note:</span> If You Write review on particular services
                Then You Can See Your all Reviews here.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-center text-5xl font-bold mt-10">
              My All <span className="text-color-b">Reviews</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
              {review.map((rev) => (
                <MySingleReview
                  rev={rev}
                  key={rev._id}
                  setRefresh={setRefresh}
                  refresh={refresh}
                ></MySingleReview>
              ))}
            </div>
          </>
        )}
      </div>
    );
};

export default MyReview;