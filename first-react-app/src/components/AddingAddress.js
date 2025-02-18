import PropTypes from "prop-types";

function AddingAddress({address}){
    return <>
    {address.title} {address.zip}     
    </>
}

AddingAddress.propTypes = {
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

export default AddingAddress;