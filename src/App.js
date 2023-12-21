function App() {
 
  return (
    <> 
    <ThemeProvider theme={theme}>
      <CssBaseline>
       <BrowserRouter>
       
       <Routes>
        
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/signin" element={<Signinform></Signinform>}/>
        
         <Route path="/signup" element={<Signup />} />
           <Route path="/account" element={<AccountManagementPage/>} />
       </Routes>
       </BrowserRouter>
       </CssBaseline>
       </ThemeProvider>
    
    </>
  );
 }
 
 
 export default App;