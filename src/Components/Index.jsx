function  Subscriptioncard(){
    return(
        <>
            <div className="play-card-outer">

                <div className="play-card1">
                    <h6>Free</h6>
                    <p>For freelancer</p>
                    <h2>$ 0</h2>
                    <div className="features">
                        <p>1 users</p>
                        <p>10 downloads per month</p>
                        <p>Raster files</p>
                    </div>
                    <button>Subscribe</button>
                </div>



                <div className="play-card2">
                    <h6>Free</h6>
                    <p>For freelancer</p>
                    <h2>$ 40</h2>
                    <div className="features1">
                        <p>1 users</p>
                        <p>10 downloads per month</p>
                        <p>Raster files</p>
                    </div>
                    <div className="successfull-msg"></div>
                    <button>Subscribe</button>
                </div>

            </div>
        </>
    )
}

export default Subscriptioncard