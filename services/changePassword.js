export const changePassword = async ({ currentPassword,newPassword,confirmNewPassword,adminCred}) => {
    if (!currentPassword?.trim() || !newPassword?.trim() || !confirmNewPassword?.trim()) {
        alert("please fill all the fields correctly")
      }
      else if (newPassword.trim() != confirmNewPassword.trim()) {
        alert("Confirm password not matching with new password")
      }
      else {
        try {
          const result = await fetch("/api/admin/changePassword", {
            method: "PATCH",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              _id:adminCred,
              password:currentPassword.trim(),
              newPassword:newPassword.trim()
            })
          })
          const data = await result.json()
          alert(data?.message)
          
        }
        catch (e) {
          console.log("Error: while changing error" + e)
        }
      }
}