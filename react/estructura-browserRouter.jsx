

<BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />}></Route>
        </Route>
      </Routes>
</BrowserRouter>
