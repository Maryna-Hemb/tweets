import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';
import { TitleH1, TitleH2 } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SharedLayout from './sharedLayot/SharedLayout';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
const AddUser = lazy(() => import('../pages/AddUser'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
