/**
 * Developer: Abubakar Abdullahi
 * Date: 15/07/2021
 * Time: 4:04 PM
 */
import React from "react";
import {Helmet} from "react-helmet";


const MetaData = ({ title }) => {
    return(
        <Helmet>
            <title>{`${title} - shopIT`}</title>
        </Helmet>
    )
}
export default MetaData