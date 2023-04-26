# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This project was made by Narwhal#9999 on Discord. Feel free to add me if you have any questions.

## [1.0.2] - 2023-04-25

### Removed

- left in a test feature that doesn't allow duplicate messages. it has been removed

## [1.0.1] - 2023-04-24 - public release

### Added
- reads from token.txt file as login token
- !help command that explains how to use it and all available commands
- !info command to credit myself

### Fixed

- no longer crashes on empty message
- no longer recursively repeats the message if megaphone is the sender (i.e. "!send #general !send #general test" would cause two messages, "!send #general test" and "test")


## [1.0.0] - 2023-04-23

### Added
