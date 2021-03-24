-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2020 a las 03:28:17
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adsdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apps`
--

CREATE TABLE `apps` (
  `id` int(18) NOT NULL,
  `app_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(18) NOT NULL,
  `app_store_id` int(18) NOT NULL,
  `app_key` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret_key` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `origin_http` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect_uri` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect_param` tinyint(1) NOT NULL DEFAULT '0',
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_store`
--

CREATE TABLE `app_store` (
  `id` int(11) NOT NULL,
  `app_name` int(11) NOT NULL,
  `installed` tinyint(1) NOT NULL,
  `updates` tinyint(1) NOT NULL,
  `current_version` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `new_version` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `old_version` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `company_information`
--

CREATE TABLE `company_information` (
  `id` int(18) NOT NULL,
  `company_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo_uri` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timezone` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments_information`
--

CREATE TABLE `payments_information` (
  `id` int(18) NOT NULL,
  `current_plan` int(18) NOT NULL,
  `billing_address_one` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_address_two` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_state` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_zip` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_phone` int(18) NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plans`
--

CREATE TABLE `plans` (
  `id` int(18) NOT NULL,
  `plan_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` int(25) NOT NULL,
  `price` int(25) NOT NULL,
  `date_created` date NOT NULL,
  `date_last_modify` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plans_asign_user`
--

CREATE TABLE `plans_asign_user` (
  `id` int(18) NOT NULL,
  `user_id` int(18) NOT NULL,
  `plans_id` int(18) NOT NULL,
  `date_of_renovation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_users` int(18) NOT NULL,
  `givenname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `familyname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `creation_date` date NOT NULL,
  `img_uri` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_users`, `givenname`, `familyname`, `username`, `password`, `email`, `creation_date`, `img_uri`) VALUES
(1, 'Miguel', 'Medina', 'Phermidex', 'Phalcon2825', 'hermides07@gmail.com', '2020-04-01', 'http://localhost:3002/uploads/IMAGE-1590187784909.png'),
(11, 'Miguel', 'Medina', 'Miguel-20040161034', '', 'miguel@minnekdigital.com', '2020-04-01', 'http://localhost:3002/uploads/IMAGE-1586803831760.jpg'),
(12, 'E', 'mesajero', 'E-20040161201', '', 'sorportmiguel@gmail.com', '2020-04-01', 'https://lh3.googleusercontent.com/a-/AOh14GjQfaXBj50FjxGGIApCR7jae7mJy9Z-X7et6uRTEA=s96-c'),
(13, 'Caona', 'Guzman', 'Caona-20040162238', '', 'gcaona28@gmail.com', '2020-04-01', 'http://localhost:3002/uploads/IMAGE-1586822300458.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_payments`
--

CREATE TABLE `user_payments` (
  `id` int(18) NOT NULL,
  `user_id` int(18) NOT NULL,
  `plans_id` int(18) NOT NULL,
  `amount` int(25) NOT NULL,
  `date_payment` date NOT NULL,
  `payment_method` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `track_id` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apps`
--
ALTER TABLE `apps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `company_information`
--
ALTER TABLE `company_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payments_information`
--
ALTER TABLE `payments_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plans_asign_user`
--
ALTER TABLE `plans_asign_user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);

--
-- Indices de la tabla `user_payments`
--
ALTER TABLE `user_payments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apps`
--
ALTER TABLE `apps`
  MODIFY `id` int(18) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `company_information`
--
ALTER TABLE `company_information`
  MODIFY `id` int(18) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments_information`
--
ALTER TABLE `payments_information`
  MODIFY `id` int(18) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(18) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plans_asign_user`
--
ALTER TABLE `plans_asign_user`
  MODIFY `id` int(18) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(18) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `user_payments`
--
ALTER TABLE `user_payments`
  MODIFY `id` int(18) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
