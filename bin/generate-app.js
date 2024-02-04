#! /usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

if (process.argv.length < 3) {
	console.log('you have to provide a name to your app.');
	console.log('For example : ');
	console.log('     npx create-my-boilerplate my-app');
	process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPO = 'https://github.com/tangjinlog/boilerPlate.git';

if (projectName !== '.') {
	try {
		fs.mkdirSync(projectPath);
	} catch (error) {
		if (error.code === 'EEXIST') {
			console.log(projectName);
			console.log(
				`The file ${projectName} already exist in the current directory, please give it another name.`,
			);
		} else {
			console.log(error);
		}
		process.exit(1);
	}
}

async function main() {
	try {
		//git clone -b 브랜치명 --single-branch https://github.com/사용자명/저장소명.git
		console.log('Downloading files...');
		execSync(`git clone --depth 1 ${GIT_REPO} ${projectPath}`);

		if (projectName !== '.') {
			process.chdir(projectPath);
		}

		console.log('Installing dependencies...');
		execSync('yarn install');

		console.log('Removing useless files');
		execSync('npx rimraf ./.git');

		console.log('The installation is done, this is ready to use !');
	} catch (error) {
		console.log(error);
	}
}
main();
