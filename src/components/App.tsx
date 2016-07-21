import * as React from "react"
import { Link } from "react-router"
import { Provider } from "react-redux"

import configureStore from "../store/index"
import Footer from "./Footer"
interface Props extends React.Props<App> {

}

const store = configureStore();

export default class App extends React.Component<Props, {}> {
    public render() {
        return (
            <Provider store={store}>
                <div>
                    <div className="ui fixed inverted menu secondary pointing"
                        style={{
                            borderBottom: '1px solid rgba(255,255,255, 0.2)',
                            background: 'rgba(255,255,255,0.1)'
                        }}>
                        <div className="ui container">
                            <Link to="/Hello" className="header item" style={{ padding: 0 }}>
                                <img width="35" height="35" className="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iODAwLjAwMDAwMHB0IiBoZWlnaHQ9IjgwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDgwMC4wMDAwMDAgODAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjExLCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxMwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw4MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMzU5MCA3MzE1IGMtODg4IC04OCAtMTYxOSAtNTAyIC0xOTUyIC0xMTA1IC04NyAtMTU3IC0xNTcgLTM1OAotMTg5IC01NDAgLTIwIC0xMTMgLTE3IC01MjYgNSAtNjYwIDU3IC0zNTIgMjAwIC02OTIgMzg2IC05MjAgMTIxIC0xNDggMjU4Ci0yNzQgMzk4IC0zNjQgMTEzIC03MiAyMzQgLTEzMCA5NzggLTQ2NiAxMDQ1IC00NzMgMTA2MyAtNDgyIDExNTQgLTU0MiAyMjkKLTE1MiAzMjMgLTMyNiAzMjEgLTU5NyAtMiAtMTcyIC0yNyAtMjg5IC02OCAtMzA2IC0xMCAtNSAtMTQxIC0xMCAtMjkxIC0xMwotMjQ3IC00IC0yODUgLTIgLTQxMCAxOCAtMjA1IDMzIC01OTQgMTY3IC03NDggMjU4IC0yNyAxNSAtMTAxIDU0IC0xNjQgODcKLTYzIDMyIC0xNDggNzUgLTE4OCA5NyAtNDAgMjEgLTc4IDM1IC04NCAzMiAtNiAtNCAtOCAtMyAtNSAzIDggMTIgLTY5IDU3Ci04MyA0OCAtNiAtNCAtOSAtMiAtOCAzIDMgMTEgLTIzNiAxNzIgLTI1NSAxNzIgLTYgMCAtMTA2IC0zMSAtMjIyIC02OCBsLTIxMAotNjggNjAgLTM5IGMzMyAtMjEgNjUgLTM4IDcyIC0zOCA3IDAgMTEgLTUgMTAgLTExIC0xIC01IDI4IC0yOCA2NSAtNTAgNjAKLTM2IDY1IC00MiA0NSAtNDggLTEyIC0zIC04MCAtMjQgLTE1MiAtNDYgLTE2NSAtNTEgLTE4MyAtNTYgLTE2NyAtNDQgNyA1IDE0CjIxIDE2IDM1IDEgMTUgNiAzMCA5IDM0IDQgMyA3IDE3IDcgMzAgMCAxNCA1IDMzIDExIDQ1IDYgMTEgOCAzMiA0IDQ2IC02IDIyCi0xMSAxMCAtMzEgLTY3IC0xMyAtNTEgLTIxIC05OCAtMTggLTEwMiAzIC01IDEgLTkgLTQgLTkgLTEwIDAgLTMxIC02OCAtNzEKLTIzMCAtODYgLTM1NyAtMTQzIC01ODQgLTE2NiAtNjU5IC0xNCAtNDYgLTI0IC04NSAtMjIgLTg3IDEgLTEgNTEgLTM0IDExMQotNzQgMTIwIC03OSAyOTAgLTE3NiA0NjQgLTI2NSA2MiAtMzEgMTExIC02MCAxMDggLTYzIC0zIC0yIC0xMyAxIC0yMSA4IC0xMQo5IC0xOSAxMCAtMjcgMiAtNiAtNiAtMTcgLTggLTI0IC01IC04IDMgLTE0IDAgLTE0IC03IDAgLTcgLTcgLTEwIC0xNSAtNiAtMTYKNiAtODQgLTEwIC0xNzAgLTM5IC02NyAtMjMgLTk0IC0zOCAtMTMzIC03MyBsLTMzIC0zMCAyNCAtMjYgYzI1IC0yNiA2MiAtNDEKMjMyIC05MCAxNTAgLTQzIDI1MSAtNjEgNjAwIC0xMDYgMzI0IC00MiA1NTIgLTYzIDExMjAgLTEwNSAxMTAgLTggMjI3IC0xNwoyNjAgLTIwIDExNyAtOSA0NjMgLTI1IDY2NSAtMzAgMjQyIC02IDgxMSAxOCA5NjAgNDAgMjE1IDMzIDM0MSA3NyAzNDggMTIzIDIKMTEgMTAgMjIgMTggMjQgMTAgMiAzIDE0IC0yMSA0MiAtMjYgMjggLTUzIDQzIC05OCA1NyAtNjYgMjEgLTE2MSA0NCAtMjE1IDU0Ci0xOCAzIC00MSAxMCAtNTAgMTUgLTkgNSAtNTAgMTMgLTkxIDE5IC00MSA1IC03OCAxNCAtODMgMTkgLTUgNSAzMCAzNiA4NCA3NAo1MSAzNyAxMDQgNzcgMTE4IDkwIDE0IDEzIDEwMiA5NCAxOTYgMTgwIDIzMyAyMTUgMzE1IDMxNiA0MjcgNTI4IDExNiAyMjAKMTc2IDQ4MCAyMDAgODYwIDcgMTA3IDExIDIzMCA5IDI3NCBsLTQgNzggLTEwMiAtNyBjLTE0MSAtOSAtMjAwIC0yMiAtNDQxCi05OCAtMzk4IC0xMjQgLTExODAgLTM2NiAtMTI2MCAtMzkwIGwtNTAgLTE0IC0yIDU2IGMtMyAxMDEgLTU2IDI0MyAtMTI5IDM0MgpsLTMzIDQ2IDk3IDMxIGM1MyAxNyAzMTEgOTkgNTcyIDE4MiAyNjEgODQgNTcyIDE4MyA2OTAgMjIwIGwyMTUgNjggMTYzIDcKYzk1IDUgMTYyIDEyIDE2MiAxNyAwIDE1IC0xMDcgMjI5IC0xMjggMjU1IC0xNiAyMiAtMjQgMjMgLTE4NyAyMyBsLTE3MCAxCi0xMzAgLTQxIGMtNzEgLTIzIC0yNzggLTkwIC00NjAgLTE1MCAtMTgxIC01OSAtNTE4IC0xNzAgLTc0NyAtMjQ1IGwtNDE4Ci0xMzYgLTcyIDM0IGMtNDAgMTkgLTExMyA1MSAtMTYzIDcyIC00OSAyMSAtMTI0IDUzIC0xNjUgNzMgLTIzNyAxMTEgLTIxNgoxMDAgLTIwOCAxMDcgMTQgMTQgMTk5MCA2NzUgMjAxOCA2NzUgMjAgMCA1MSAtMjUgMTMwIC0xMDYgbDEwNSAtMTA2IDgwIDEKYzQ0IDEgMTA2IDggMTM4IDE2IDMyIDggNjAgMTUgNjIgMTUgMTQgMCAwIDIzIC00MSA2OSAtNDcgNTMgLTQ2IDUyIC0xMDQgMzMKLTggLTMgLTYgMiA1IDExIDExIDggMjMgMTMgMjcgMTEgNSAtMyA4IC0xIDggNCAwIDE1IC0zNiA0MyAtNDUgMzUgLTQgLTUgLTUKLTIgLTEgNSAxMCAxNyAtMTMgNDMgLTEzNCAxNDYgLTEyMCAxMDMgLTE3NSAxNDYgLTIyNSAxNzkgLTIyIDE1IC02MiA0MiAtOTAKNjIgLTgxIDU4IC0zMTAgMTg1IC00MjUgMjM1IC01OCAyNiAtNDE5IDE3MiAtODAxIDMyNSAtMzgyIDE1MyAtNzI0IDI5NSAtNzYxCjMxNiAtODAgNDcgLTE2NiAxMjMgLTIwNiAxODUgLTU5IDg4IC02OSAyOTAgLTE5IDM5NiA1MyAxMTYgMTk4IDIxMSAzODUgMjUzCjE0MCAzMiAyNzQgNDYgNDgyIDUxIDIwNyA2IDIxOSA1IDMyNSAtMjAgMTQzIC0zMyAzMjMgLTkyIDQ2MCAtMTUxIDE0MyAtNjEKNDQ3IC0yMjEgNTUzIC0yOTAgNDUgLTMwIDgyIC01MSA4MiAtNDYgMCA0IC0xNCAyNyAtMzAgNTAgbC0zMCA0MSAyMiA5IGMxMyA0CjM4IDExIDU2IDE0IDI3IDYgMzIgNCAzMiAtMTQgMCAtMTEgLTcgLTM2IC0xNSAtNTYgLTI0IC01NiAtMTYgLTYzIDY3IC02NCA0MAowIDk3IC00IDEyNiAtOCA0MyAtNiA1NSAtNSA2MSA4IDggMTQgMTA1IDMwOSAxMzAgMzk2IDI4IDkyIDE2MyA1MDMgMTcxIDUyMAoxMyAyNiAxMzAgMzg3IDEzMCA0MDAgMCAxNyAtNDkgNDIgLTIyNiAxMTEgLTM3OCAxNDggLTk0MSAzMTcgLTEyNzkgMzgzIC00MTMKODAgLTg5MiAxMTAgLTEyMzUgNzZ6IG01MzUgLTE2IGM5NCAtNSAyMzUgLTE3IDMxNCAtMjYgbDE0MyAtMTYgLTM4IC0xNSBjLTQ3Ci0xOCAtNDMzIC0xNzkgLTc0NCAtMzA5IC0xMjQgLTUyIC0zMTkgLTEzNSAtNDM1IC0xODMgLTM1NSAtMTQ4IC05MDIgLTM3OAotMTA2MCAtNDQ1IC0xNTIgLTY1IC03MTkgLTMwMyAtNzQzIC0zMTIgLTExIC01IC0xMiAtMiAtNCAxMyA2IDEwIDM0IDY5IDYzCjEyOSAxMTggMjQ3IDMxMiA0NzkgNDYzIDU1NiA3NCAzOCAyODggMTMyIDU3NiAyNTQgNjkgMjkgMjQwIDEwMiAzODAgMTYzIDQwMwoxNzQgNDIwIDE3OSA2NjAgMTkxIDE5NCA5IDI0MyAxMCA0MjUgMHogbTEyMTEgLTIwNSBjNzYgLTE5IDIzNSAtNjcgMzUzIC0xMDYKbDIxNCAtNzEgLTg5IC0zMiBjLTQ5IC0xOCAtMjM1IC05MSAtNDE0IC0xNjIgLTE3OSAtNzIgLTU2MyAtMjI2IC04NTUgLTM0MwotMjkxIC0xMTcgLTU5MyAtMjM4IC02NzAgLTI3MCAtMTIyIC01MCAtMTUyIC01OCAtMjMwIC02NCAtMTE3IC05IC0yOTQgLTQwCi0zNzQgLTY2IC0xMzIgLTQyIC0yNjUgLTEzMyAtMzI0IC0yMjMgLTMxIC00NyAtNDEgLTU1IC03NSAtNTkgLTIxIC0zIC0zNDcKLTEyOSAtNzI0IC0yODAgbC02ODUgLTI3NSAtNCA1MSBjLTIgMjggLTMgMTM0IC0zIDIzNSAxIDE0MyA1IDE4NSAxNSAxOTIgMTUKOSAxMDYgNDcgOTE0IDM3OSAyOTcgMTIyIDY4NiAyODEgODY1IDM1NSAxNzkgNzMgNTU3IDIyOSA4NDAgMzQ1IDI4MyAxMTYgNTkyCjI0MyA2ODUgMjgyIDI0NiAxMDMgMzY2IDE0NyAzOTYgMTQ4IDE0IDAgODggLTE2IDE2NSAtMzZ6IG02NDggLTU0OCBjLTMgLTEzCi00NSAtMTQ0IC05MyAtMjkyIGwtODggLTI2OCAtNjQgLTE3IGMtMzUgLTkgLTE4MCAtNjEgLTMyMyAtMTE2IGwtMjU5IC0xMDAKLTQxIDIxIGMtODYgNDUgLTI4NSAxMjUgLTM4NiAxNTYgLTU4IDE4IC0xMTQgMzYgLTEyNSA0MSAtMjggMTEgLTg3IDIzIC0xMDIKMjAgLTcgLTEgLTEzIDEgLTEzIDQgMCA4IDIyIDE3IDM1MCAxNDUgMTUxIDYwIDQzNyAxNzIgNjM1IDI1MCAzODkgMTU0IDQ1OAoxNzkgNDkzIDE3OSAxOSAxIDIxIC0zIDE2IC0yM3ogbS0zMDc0IC0xMjM2IGMyOCAtODMgMTgwIC0yMjkgMjkzIC0yODEgMTUgLTcKMjcgLTE1IDI3IC0xOSAwIC0zIC0yMSAtMTIgLTQ3IC0xOCAtMjcgLTcgLTIzMCAtODIgLTQ1MyAtMTY4IC04ODkgLTM0MAotMTA2MiAtNDA2IC0xMDY1IC00MDIgLTIgMyAtNDUgOTUgLTcwIDE1MyAtNyAxNyAtMjkgODEgLTQ4IDE0MyAtMzIgMTAyIC0zNAoxMTMgLTE5IDEyMSAxMCA1IDgwIDM0IDE1NyA2NCAxNDQgNTcgMTA5OCA0MzAgMTEyNSA0NDAgOCAzIDMxIDYgNTEgNiAzMyAxCjM3IC0yIDQ5IC0zOXogbTEwNjAgLTU5NSBjMTQ2IC01OCAyNzkgLTExMyAyOTcgLTEyMSAxNyAtNyAzNyAtMTQgNDUgLTE1IDcKLTEgLTE4IC0xMSAtNTcgLTI0IC01OSAtMTkgLTEzOTYgLTUwMyAtMTU2NSAtNTY2IC0zMDggLTExNiAtNDk2IC0xODAgLTUwNgotMTcyIC03IDQgLTM2IDI1IC02NSA0NSAtNDcgMzIgLTEyMyAxMDQgLTIzOCAyMjYgLTE3IDE5IC0yOSAzOCAtMjUgNDMgMyA1Ci0xIDkgLTggOSAtMzggMCA0MSAzNiAyNjIgMTE4IDEzNSA1MCA1MDYgMTg5IDgyNSAzMDggNjE1IDIzMCA3MTggMjY2IDc1MAoyNjAgMTEgLTIgMTM5IC01MiAyODUgLTExMXogbTkzOCAtMzkwIGM2MiAtMzAgMTUyIC03OCAyMDAgLTEwNiA4OSAtNTMgMjE1Ci0xMzkgMjEwIC0xNDQgLTIgLTIgLTM0IC0xMiAtNzMgLTIzIC0zOCAtMTEgLTE3MyAtNTYgLTMwMCAtMTAwIC0yMDggLTcyCi05ODYgLTM0MSAtMTU2NSAtNTQxIC0xNDcgLTUxIC0yMzAgLTc1IC0yNDAgLTcwIC0xMyA4IC0xMDIgNDggLTIwNSA5NCAtMTYgNwotNjggMzEgLTExNSA1MyAtNDcgMjIgLTEyNSA1NyAtMTczIDc3IC01OCAyNSAtODQgNDEgLTc1IDQ2IDcgNCAxMjMgNDYgMjU4Cjk0IDEzNSA0OCAzMDggMTA5IDM4NSAxMzcgNzcgMjcgMTgzIDY1IDIzNSA4MyA1MiAxOCAxMjAgNDIgMTUwIDUzIDMwIDEyIDEzOAo1MCAyNDAgODYgMTAyIDM2IDI3NSA5NyAzODUgMTM2IDM3NCAxMzQgNTEwIDE3OSA1NDAgMTgwIDE3IDAgODEgLTI1IDE0MyAtNTV6Cm04OTIgLTU2MCBjMTEgLTEzIDEwIC0xNCAtNCAtOSAtOSAzIC0xNiAxMCAtMTYgMTUgMCAxMyA2IDExIDIwIC02eiBtOTMgLTIyCmMtMTMgLTIgLTMzIC0yIC00NSAwIC0xMyAyIC0zIDQgMjIgNCAyNSAwIDM1IC0yIDIzIC00eiBtNzAgMCBjLTcgLTIgLTIxIC0yCi0zMCAwIC0xMCAzIC00IDUgMTIgNSAxNyAwIDI0IC0yIDE4IC01eiBtLTM1MjggLTEyNjMgYzMgLTYgLTEgLTcgLTkgLTQgLTE4CjcgLTIxIDE0IC03IDE0IDYgMCAxMyAtNCAxNiAtMTB6IG0tNDI1IC0xMDAgYzAgLTUgLTUgLTEwIC0xMSAtMTAgLTUgMCAtNyA1Ci00IDEwIDMgNiA4IDEwIDExIDEwIDIgMCA0IC00IDQgLTEweiBtNDMyNSAtMTk3IGMtNiAtMTQzIC0zMiAtMzYzIC00NCAtMzc1Ci00IC00IC04MyAtMzAgLTE3NiAtNTcgLTk0IC0yNyAtNDc0IC0xMzggLTg0NSAtMjQ2IC0zNzEgLTEwOCAtNzM2IC0yMTQgLTgxMAotMjM1IC02MzMgLTE4NSAtMTE2OSAtMzQwIC0xMjk1IC0zNzYgLTY2IC0xOCAtMTM4IC0zNCAtMTYwIC0zNCAtMzAgMCAtMzYgLTMKLTI1IC0xMCAxMyAtOCAxMyAtMTAgLTIgLTEwIC05IDAgLTI1IC0zIC0zNSAtNiAtMTcgLTUgLTE3IC01IDAgNiAyMCAxMyAxNAozMCAtMTEgMjkgLTE0IDAgLTEzIC0yIDMgLTkgbDIwIC05IC0yMCAtMSBjLTExIC0xIC0zMyAtNCAtNTAgLTYgLTIwIC0yIC0yNQowIC0xNiA1IDggNSAyMSA2IDMwIDMgMTQgLTUgMTQgLTQgMSA5IC04IDkgLTM1IDE1IC02MCAxNiAtMjUgMCAtOTggMiAtMTYyIDMKLTY1IDEgLTExOCA1IC0xMTggOSAwIDQgLTgxIDE0IC0xODAgMjEgLTk5IDcgLTE4MCAxNiAtMTgwIDIwIDAgNCAtMTEgMTAgLTI1CjEyIC0xNyA0IC0yNSAxIC0yNSAtOSAwIC0xNyAtNTEgLTcgLTYzIDEzIC00IDcgLTEzIDExIC0yMCA4IC0xNSAtNSAtNzAgMjAKLTYxIDI4IDMgMyAtMTIgOSAtMzMgMTMgLTM2IDcgLTM3IDggLTE0IDE2IDE0IDYgMzIgNyA0MCA0IDggLTMgMTIgLTMgOCAxIC00CjQgMzQ5IDExNSA3ODUgMjQ2IDEyMzkgMzcyIDExMTMgMzM4IDEyNDcgMzM4IDI5MiAwIDQzMCA0MSA1NTkgMTY2IDU2IDU0IDU2CjU0IDI1MSAxMTMgMTAxMSAzMDYgMTQ1NyA0NDAgMTQ3NSA0NDAgMTcgMSAxOCAtNyAxMSAtMTM2eiBtLTM2MjggOTEgYy0zIC0zCi0xMiAtNCAtMTkgLTEgLTggMyAtNSA2IDYgNiAxMSAxIDE3IC0yIDEzIC01eiBtLTQyMCAtNjAgYy0zIC0zIC0xMiAtNCAtMTkKLTEgLTggMyAtNSA2IDYgNiAxMSAxIDE3IC0yIDEzIC01eiBtNDU2IC0yMDEgYy03IC0yIC0xOSAtMiAtMjUgMCAtNyAzIC0yIDUKMTIgNSAxNCAwIDE5IC0yIDEzIC01eiBtLTEwOCAtMjQgYy0yIC0zIDI0IC0yMCA1OCAtMzggMzQgLTE4IDgyIC00MyAxMDcgLTU2CjUwIC0yNyAyMzMgLTEwNSAzMTkgLTEzNyAxMTcgLTQzIDExNiAtMzcgNiAtNzAgLTEwMCAtMzAgLTUwMSAtMTUzIC0xMTAzCi0zMzkgLTE3NyAtNTUgLTMyNyAtOTcgLTMzMiAtOTQgLTYgMyAtNiAxNCAwIDI4IDUgMTIgMzIgMTIxIDYwIDI0MiAyOCAxMjEKNTYgMjIzIDYzIDIyNyA3IDUgMzkgMTcgNzIgMjcgMzMgMTEgMTk1IDYyIDM2MCAxMTQgMTY1IDUyIDMwOSA5NyAzMjAgMTAwIDI3CjYgNzQgMyA3MCAtNHogbTM1MzUgLTU5MyBjLTE4IC00OCAtNzkgLTE2MiAtMTE0IC0yMTUgLTIwIC0yOSAtMzYgLTU1IC0zNgotNTcgMCAtOCAtNDcgLTYxIC0xMDcgLTEyMiAtMzUgLTM1IC02MyAtNjYgLTYzIC03MCAwIC00IC0yMCAtMjAgLTQ0IC0zNyAtMjQKLTE2IC00MiAtMzQgLTM4IC00MCAzIC01IDIgLTcgLTMgLTMgLTQgNCAtMjYgLTYgLTQ4IC0yMiAtMjMgLTE3IC00NyAtMzAgLTU0Ci0zMCAtNyAwIC0xMCAtNiAtNyAtMTQgNCAtMTEgMCAtMTMgLTE3IC05IC0xMyA0IC0yMCAyIC0xNiAtMyA4IC0xMyAtMTU3IC01OQotMTczIC00OSAtOCA1IC0xMSA0IC03IC0yIDggLTEyIC0xMTggLTQ3IC0xMzQgLTM4IC01IDQgLTkgMSAtOSAtNCAwIC02IC01Ci0xMSAtMTEgLTExIC02IDAgLTkgNiAtNiAxMyA0IDEwIC0yIDEzIC0xOSA5IC0yNiAtNSAtMzIgLTE3IC0xMSAtMjUgNiAtMyAtOAotMyAtMzMgMCAtMjUgMiAtNTYgOSAtNzAgMTQgLTE0IDUgLTY1IDExIC0xMTUgMTQgLTIzNiAxNSAtMzcyIDI3IC0zOTAgMzUKLTExIDUgLTUxIDkgLTkwIDggLTYwIC0xIC0yODkgMTMgLTQzNCAyNyAtMjQgMiAtNTMgLTEgLTYzIC02IC0xNCAtOCAtMjYgLTUKLTUwIDEyIGwtMzIgMjMgMzAgOCBjMTYgNCAzOCA1IDQ5IDIgMTIgLTMgMTUgLTIgOCAzIC03IDUgMjE2IDcyIDU1MCAxNjcgMzA5Cjg4IDc4NSAyMjMgMTA1NyAzMDIgMjcyIDc4IDQ5OCAxNDIgNTAyIDE0MyA0IDAgMyAtMTAgLTIgLTIzeiBtLTMyODMgLTU4MgpjLTMgLTMgLTEyIC00IC0xOSAtMSAtOCAzIC01IDYgNiA2IDExIDEgMTcgLTIgMTMgLTV6IG0xMDczIC0zMyBjLTggLTUgLTMxCi0xMSAtNTAgLTE0IC0zNSAtNiAtMzUgLTYgNSA4IDQ2IDE1IDY3IDE4IDQ1IDZ6IG0yOCAtMzIgYy0xMSAtNyAtMTAgLTkgMSAtOQo4IDAgMTIgLTMgOCAtNiAtMyAtMyAtMTQgLTEgLTI0IDUgLTExIDYgLTEzIDExIC01IDExIDcgMCAxMCA0IDcgMTAgLTMgNiAxIDcKMTAgMyAxMyAtNSAxNCAtNyAzIC0xNHogbS0xMjEgNSBjLTMgLTMgLTEyIC00IC0xOSAtMSAtOCAzIC01IDYgNiA2IDExIDEgMTcKLTIgMTMgLTV6IG00MCAtMTAgYy0zIC0zIC0xMiAtNCAtMTkgLTEgLTggMyAtNSA2IDYgNiAxMSAxIDE3IC0yIDEzIC01egptMTMwMyAtOTQgYy04IC01IC0xOSAtMTAgLTI1IC0xMCAtNSAwIC0zIDUgNSAxMCA4IDUgMjAgMTAgMjUgMTAgNiAwIDMgLTUgLTUKLTEweiIvPgo8cGF0aCBkPSJNMzA2OCA4ODMgYzcgLTMgMTYgLTIgMTkgMSA0IDMgLTIgNiAtMTMgNSAtMTEgMCAtMTQgLTMgLTYgLTZ6Ii8+CjxwYXRoIGQ9Ik01MjM4IDcwMyBjNyAtMyAxNiAtMiAxOSAxIDQgMyAtMiA2IC0xMyA1IC0xMSAwIC0xNCAtMyAtNiAtNnoiLz4KPHBhdGggZD0iTTYxMjMgMzYyMyBjLTEzIC0yIC0yMyAtOSAtMjMgLTE0IDAgLTYgLTMgLTggLTcgLTYgLTUgMyAtMzMgMSAtNjMKLTQgLTMwIC01IC03NiAtOSAtMTAyIC0xMCAtMjcgLTEgLTQ4IC01IC00OCAtOSAwIC0yMCA1MCAtNTAgODQgLTUwIDI0IDAgMzUKLTQgMzEgLTExIC00IC02IC0xMyAtOCAtMjEgLTUgLTkgMyAtMTEgLTEgLTggLTEyIDUgLTE0IDMgLTEzIC0xMCAyIC05IDExCi0xNiAxNSAtMTYgOSAwIC02IDYgLTE2IDE0IC0yMyAxMiAtOSAxOCAtNyAzMyA5IDEyIDE0IDI5IDIxIDU1IDIxIDIxIDAgMzggNQozOCAxMCAwIDcgMjAgMTAgNTAgOSAyOCAtMiA1MCAtNyA1MCAtMTIgMCAtNiAyIC04IDUgLTUgOSA5IC03IDM4IC0xNyAzMiAtNgotNCAtNSAzIDEgMTUgMTQgMjUgMjMgMjggMTQgNCAtNCAtMTEgLTMgLTE0IDUgLTkgNyA0IDEzIDIgMTMgLTMgMSAtNiAyIC0xNwozIC0yMyAwIC03IDYgLTEzIDExIC0xMyA2IDAgMTcgLTQgMjUgLTEwIDEyIC03IDEzIC02IDUgNiAtMzcgNTAgLTg3IDEwOSAtOTMKMTA4IC00IC0xIC0xNyAtNCAtMjkgLTZ6IG0tMTQwIC04MCBjLTEzIC0yIC0zMyAtMiAtNDUgMCAtMTMgMiAtMyA0IDIyIDQgMjUKMCAzNSAtMiAyMyAtNHoiLz4KPHBhdGggZD0iTTU5OTAgMzQ3MSBjMCAtNyAtNSAtOSAtMTIgLTUgLTcgNSAtOCAzIC0zIC01IDUgLTkgMTAgLTEwIDE4IC0yIDYKNiA4IDE0IDQgMTggLTQgMyAtNyAxIC03IC02eiIvPgo8cGF0aCBkPSJNNjI3MyAzNDU1IGMwIC04IDQgLTE1IDkgLTE1IDQgMCA4IDQgOCA5IDAgNiAtNCAxMiAtOCAxNSAtNSAzIC05Ci0xIC05IC05eiIvPgo8cGF0aCBkPSJNNTU2MCA2MTAgYzggLTUgMjAgLTEwIDI1IC0xMCA2IDAgMyA1IC01IDEwIC04IDUgLTE5IDEwIC0yNSAxMCAtNQowIC0zIC01IDUgLTEweiIvPgo8L2c+Cjwvc3ZnPgo=" />
                                <span style={{ margin: 5 }}>SPL Client</span>
                            </Link>
                            <Link to="/Hello" className="item active">Hello</Link>
                            <Link to="/About" className="item">About</Link>
                            <Link to="/Link" className="item">Link</Link>
                        </div>
                    </div>

                    <div className="ui main container">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </Provider >
        )
    }
}
