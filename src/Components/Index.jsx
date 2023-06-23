import { useState } from "react"

function  Subscriptioncard(){
    // const Subscription = () => {
    //     let[ language]
    // }

    return(
        <>
            <div className="play-card-outer">

                <div className="play-card1">
                    <h6>Free</h6>
                    <p>For freelancer</p>
                    <h2>$ 0</h2>
                    <div className="features">
                        <p><i class="fa fa-check" aria-hidden="true"></i>1 users</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>10 downloads per month</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>Raster files</p>
                    </div>
                    <button>Subscribe</button>
                </div>



                <div className="play-card2">
                    <h6>Pro</h6>
                    <p>For agencies</p>
                    <h2>$ 40</h2>
                    <div className="features1">
                        <p><i class="fa fa-check" aria-hidden="true"></i>3 users</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited downloads</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>Fully editable files</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>Custom packs</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>200+ custom icons</p>
                    </div>
                    <div className="successfull-msg"></div>
                    <button>Subscribe</button>
                </div>

            </div>
        </>
    )
}

export default Subscriptioncard