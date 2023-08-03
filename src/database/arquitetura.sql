-- Active: 1691066582442@@127.0.0.1@3306

CREATE TABLE
    users(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        username TEXT UNIQUE NOT NULL,
        profile_img_url TEXT NOT NULL
    );

CREATE TABLE
    videos(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        creator_id TEXT NOT NULL,
        title TEXT NOT NULL,
        thumbnail_img_url TEXT NOT NULL,
        video_url TEXT UNIQUE NOT NULL,
        likes INTEGER NOT NULL,
        dislikes INTEGER NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (creator_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    likes_dislikes(
        user_id TEXT NOT NULL,
        video_id TEXT NOT NULL,
        like INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (video_id) REFERENCES videos(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

SELECT * FROM users;