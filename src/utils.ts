import { appVersion } from './constant';
import chalk from "chalk"
import figlet from "figlet"

export function welcomeMessage() {
    console.log(
        chalk.white(
            figlet.textSync("sepack", {
                font: "Colossal",
                horizontalLayout: "default",
                verticalLayout: "default",
                width: 80,
                whitespaceBreak: true,
            })
        )
    )
    console.log(
        chalk.green(
            figlet.textSync("android", {
                font: "Colossal",
                horizontalLayout: "default",
                verticalLayout: "default",
                width: 80,
                whitespaceBreak: false,
            })
        )
    )

    console.log(chalk.green("-------------------------------"))
    console.log(
        chalk.green(appVersion) + " | " + "by github.com/" + chalk.redBright("utsmannn")
    )
    console.log(chalk.green("-------------------------------"))
}