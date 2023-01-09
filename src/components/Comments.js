import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket = socketIO.connect('http://localhost:4000');

const Comments = () => {
};
