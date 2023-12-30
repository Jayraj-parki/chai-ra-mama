const breakStringOnUppercase = (str = "") => {
    return str?.split(/(?=[A-Z])/).join(' ');
}
export const validateUserProfileData = async ({userDetails,setAlert}) => {

    try {
        let keysWithNullValues = [];
        for (let key in userDetails) {
          if (userDetails[key] === null || userDetails[key] == "") {
            keysWithNullValues.push(breakStringOnUppercase(key)?.toLocaleLowerCase());
          }
        }
        if( keysWithNullValues.length>0){
            setAlert({ modalActive: true, workStatus: "failed", message: `(${keysWithNullValues?.join(', ')}) is not mentioned, please complete your profile.` })
            return false
        }
        return true
    }
    catch (err) {
        console.log("validateUserProfileData" + err)
        setAlert({ modalActive: false, workStatus: "", message: "" })
        return false
    }
}