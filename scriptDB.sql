
CREATE TABLE `detalleentrada` (
  `idDetalleEntrada` int(11) NOT NULL,
  `idEntrada` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `codigoProducto` varchar(50) NOT NULL,
  `descripcionProducto` varchar(100) NOT NULL,
  `categoriaProducto` varchar(50) NOT NULL,
  `precioCompra` varchar(50) NOT NULL,
  `precioVenta` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subTotal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `detallesalida` (
  `idDetalleSalida` int(11) NOT NULL,
  `idSalida` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `codigoProducto` varchar(50) NOT NULL,
  `descripcionProducto` varchar(100) NOT NULL,
  `categoriaProducto` varchar(50) NOT NULL,
  `precioVenta` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subTotal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `entrada` (
  `idEntrada` int(11) NOT NULL,
  `numeroDocumento` varchar(50) NOT NULL,
  `fechaRegistro` varchar(50) NOT NULL,
  `usuarioRegistro` varchar(50) NOT NULL,
  `documentoProveedor` varchar(50) NOT NULL,
  `nombreProveedor` varchar(50) NOT NULL,
  `cantidadProductos` varchar(50) NOT NULL,
  `montoTotal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `entrada` (`idEntrada`, `numeroDocumento`, `fechaRegistro`, `usuarioRegistro`, `documentoProveedor`, `nombreProveedor`, `cantidadProductos`, `montoTotal`) VALUES
(18, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(19, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(20, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(21, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(22, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(23, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(24, '1001', '18-1-23', 'ogv2003', '1000', 'Coca-cola', '20', '100'),
(25, '2003', '23/01/23', 'OGV2003', '1000', 'Coca-cola', '25', '550'),
(26, '2003', '23/01/23', 'OGV2003', '1000', 'Coca-cola', '25', '550'),
(27, '2003', '23/01/23', 'OGV2003', '1000', 'Coca-cola', '25', '550'),
(28, '2003', '23/01/23', 'OGV2003', '1000', 'Coca-cola', '25', '550'),
(29, '12344', '2023-02-02', '', '1000', 'Coca-cola', '', ''),
(30, '202321', '2023-02-03', '', '1001', 'Sabritas', '', ''),
(31, '12122', '2023-02-03', '', '1001', 'Sabritas', '', ''),
(32, '121233', '2023-02-03', '', '12345', 'Proveedor del frontend', '05010', '4750'),
(33, '121223345', '2023-02-04', '', '1000', 'Coca-cola', '0453050', '3390'),
(34, '1234564322', '2023-02-04', '', '1000', 'Coca-cola', '010030', '3580'),
(35, '121335565', '2023-02-04', '', '1000', 'Coca-cola', '269', '20967'),
(36, '11122234', '2023-02-05', '', '1000', 'Coca-cola', '206', '41044'),
(37, '11122234', '2023-02-05', '', '1000', 'Coca-cola', '206', '41044'),
(38, '10000', '2023-02-23', '', '1000', 'Coca-cola', '400', '63400'),
(39, '112345', '2023-02-08', '', '1001', 'Sabritas', '40', '1600'),
(40, '25636565', '2023-02-08', '', '1001', 'Sabritas', '110', '4200'),
(41, '25636565', '2023-02-08', '', '1001', 'Sabritas', '110', '4200'),
(42, '111111', '14/02/23', 'OGV2003', '1000', 'Coca-cola', '40', '800'),
(43, '1212345', '2023-02-19', '', '1001', 'Sabritas', '03020', '540'),
(44, '1231235', '2023-02-19', '', '1002', 'Desarrollador', '29', '310'),
(45, '12345', '2023-02-21', '', '1000', 'Coca-cola', '0', '0'),
(46, '123', '2023-02-21', '', '1234', 'Coca-cola', '11', '209'),
(47, '123', '2023-02-21', '', '12345', '', '7', '133');

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `categoria` varchar(50) DEFAULT '',
  `precioCompra` varchar(50) NOT NULL DEFAULT '',
  `precioVenta` varchar(50) NOT NULL DEFAULT '',
  `stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `producto` (`idProducto`, `codigo`, `descripcion`, `categoria`, `precioCompra`, `precioVenta`, `stock`) VALUES
(1, '1234', 'Primer producto otra vez', 'desarrollo', '20', '40', -165),
(4, '222020', 'tercer producto', 'desarrollo', '20', '40', -50),
(5, '20031', 'Producto desde php', 'desarrollo', '20', '25', -10),
(7, '80367', 'Producto del frontend', 'Frontend', '19', '38', 4088),
(8, '11111111', 'Producto del frontend 2', 'Frontend', '20', '40', 30),
(9, '123455566', 'Producto del frontend 3', 'Frontend', '30', '35', 50),
(10, '1234567889', 'Producto del frontend 4', 'Frontend', '24', '36', 50),
(29, '8036722', 'Producto del frontend 5', 'Frontend', '13', '23', 30),
(30, '123456', 'Producto del frontend 8', 'Frontend', '12', '34', 10132),
(32, '123456789', 'Producto del frontend 9', 'Frontend', '200', '300', 10200),
(33, '8036712345', 'Producto del frontend 11', 'Frontend', '10', '20', 0),
(34, '2003166', 'pruba 1', 'desarrollo', '23', '43', 35),
(35, '20031662', 'prueba 2', 'desarrollo', '45', '90', 180),
(36, '22222', 'Otro producto', 'Va de nuevo', '10', '19', 49),
(37, '123455432', 'Producto del frontend de nuevo', 'Frontend', '12', '23', 30);

CREATE TABLE `proveedor` (
  `idProveedor` int(11) NOT NULL,
  `numeroDocumento` varchar(50) NOT NULL,
  `nombreCompleto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `proveedor` (`idProveedor`, `numeroDocumento`, `nombreCompleto`) VALUES
(1, '1000', 'Coca-cola'),
(2, '1001', 'Sabritas'),
(5, '1002', 'Desarrollador'),
(6, '1005', 'lenovo'),
(7, '1006', 'Proveedor del frontend'),
(8, '1007', 'Proveedor del frontend 2'),
(9, '1008', 'Proveedor del frontend 3'),
(10, '1009', 'Proveedor del frontend 4'),
(11, '1010', 'Proveedor del frontend 5'),
(12, '1011', 'Proveedor del frontend 5');

CREATE TABLE `salida` (
  `idSalida` int(11) NOT NULL,
  `numeroDocumento` varchar(50) NOT NULL,
  `fechaRegistro` varchar(50) NOT NULL,
  `usuarioRegistro` varchar(50) NOT NULL,
  `documentoCliente` varchar(50) NOT NULL,
  `nombreCliente` varchar(50) NOT NULL,
  `cantidadProductos` int(11) NOT NULL,
  `montoTotal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `salida` (`idSalida`, `numeroDocumento`, `fechaRegistro`, `usuarioRegistro`, `documentoCliente`, `nombreCliente`, `cantidadProductos`, `montoTotal`) VALUES
(1, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(2, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(3, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(4, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(5, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(6, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(7, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(8, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(9, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(10, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(11, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(12, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(13, '2001', '22/01/23', 'OGV2003', '', '', 15, '200'),
(14, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(15, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(16, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(17, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(18, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(19, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(20, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(21, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(22, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(23, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(24, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(25, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(26, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(27, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(28, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(29, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(30, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(31, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(32, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(33, '2003', '23/01/23', 'OGV2003', '', '', 25, '550'),
(34, '1234', '2023-02-09', '', '', '', 354, '13262'),
(35, '12324', '2023-02-09', '', '', '', 50, '1900'),
(42, '111111', '14/02/23', 'OGV2003', '', '', 40, '1150'),
(43, '111111', '14/02/23', 'OGV2003', '', '', 40, '1150'),
(44, '111111', '14/02/23', 'OGV2003', '', '', 40, '1150'),
(45, '20005', '2023-02-19', '', '', '', 265, '10300');

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreCompleto` varchar(100) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL,
  `clave` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuario` (`idUsuario`, `nombreCompleto`, `nombreUsuario`, `clave`) VALUES
(1, 'Octavio Guerrero', 'OGV2003', '1234'),
(2, 'Lionel Messi', 'MessiCampeon', '2022'),
(4, 'Pep Guardiola', 'sextete', '2009'),
(5, 'Octavio guerrreo', 'ogv11', '123456'),
(6, 'Usuario desde el frontend', 'frontend1', '1234567'),
(8, 'Octavio Vazquez', 'cule', '2004'),
(9, 'Octavio Paz', 'soyYoo', '20124'),
(10, 'Octavio Paz', 'nosou', '20124'),
(11, 'Octavio Paz', 'usuarioBackend', '20124'),
(12, 'Usuario Frontend 2', 'UsuarioFrontend', '12345678');


ALTER TABLE `detalleentrada`
  ADD PRIMARY KEY (`idDetalleEntrada`),
  ADD KEY `idEntrada` (`idEntrada`);

ALTER TABLE `detallesalida`
  ADD PRIMARY KEY (`idDetalleSalida`),
  ADD KEY `idSalida` (`idSalida`);

ALTER TABLE `entrada`
  ADD PRIMARY KEY (`idEntrada`);

ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`idProveedor`);

ALTER TABLE `salida`
  ADD PRIMARY KEY (`idSalida`);

ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);


ALTER TABLE `detalleentrada`
  MODIFY `idDetalleEntrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

ALTER TABLE `detallesalida`
  MODIFY `idDetalleSalida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

ALTER TABLE `entrada`
  MODIFY `idEntrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

ALTER TABLE `proveedor`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

ALTER TABLE `salida`
  MODIFY `idSalida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;


ALTER TABLE `detalleentrada`
  ADD CONSTRAINT `detalleentrada_ibfk_1` FOREIGN KEY (`idEntrada`) REFERENCES `entrada` (`idEntrada`);

ALTER TABLE `detallesalida`
  ADD CONSTRAINT `detallesalida_ibfk_1` FOREIGN KEY (`idSalida`) REFERENCES `salida` (`idSalida`);
