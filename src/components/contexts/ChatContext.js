// import React, { useContext, useState, useEffect } from "react"
// import { useHistory } from "react-router-dom"

// const ChatContext = React.createContext()

// export function useAuth() { return useContext(ChatContext) }

// export function AuthProvider({ children }) {
//   const [loading, setLoading] = useState(true)
//   const [user, setUser] = useState(null)
//   const history = useHistory()

//   const value = { user }

//   return (
//     <ChatContext.Provider value={value}>
//       {!loading && children}
//     </ChatContext.Provider>
//   )
// }