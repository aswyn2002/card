"use client"
import React from 'react';
import { Pagination } from 'antd';

const pagination: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

export default pagination;