-- 创建数据库
CREATE DATABASE api_mock_tool
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

-- 切换到数据库
USE api_mock_tool;

-- 创建 api 表
CREATE TABLE api (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    method VARCHAR(10) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 创建 api_property 表
CREATE TABLE api_properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    propertyName VARCHAR(255) NOT NULL UNIQUE,
    responseStatusCode INT NOT NULL,
    responseContent TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 创建 api_to_property 表
CREATE TABLE api_to_properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apiId INT NOT NULL,
    apiPropertyId INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (apiId) REFERENCES apis(id),
    FOREIGN KEY (apiPropertyId) REFERENCES api_properties(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;