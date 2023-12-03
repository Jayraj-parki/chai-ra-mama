export const changeLocalUserPassword = async ({ currentPassword,newPassword,confirmNewPassword,userCred,setAlert}) => {
    if (!currentPassword?.trim() || !newPassword?.trim() || !confirmNewPassword?.trim()) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
      }
      else if (newPassword.trim() != confirmNewPassword.trim()) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Confirm password not matching with new password" })
      }
      else {
        try {
          const result = await fetch("/api/user/changePassword", {
            method: "PATCH",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              _id:userCred,
              password:currentPassword.trim(),
              newPassword:newPassword.trim()
            })
          })
          const data = await result.json()
          setAlert({ modalActive: true, workStatus: "done", message: data?.message })
          
        }
        catch (e) {
          console.log("Error: while changing error" + e)
        }
      }
}