

//Microsoft
function micro(){

    /* ------- Array dos apps padrão ---- */
    var formsMicro0 = [ {
            icone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMjAgMkg5LjMzM0ExLjMzMyAxLjMzMyAwIDAwOCAzLjMzM1Y5bDEyIDcgNiAyLjUzMkwzMiAxNlY5eiIgZmlsbD0iIzIxYTM2NiIvPjxwYXRoIGZpbGw9IiMxMDdjNDEiIGQ9Ik04IDloMTJ2N0g4eiIvPjxwYXRoIGQ9Ik0zMC42NjcgMkgyMHY3aDEyVjMuMzMzQTEuMzMzIDEuMzMzIDAgMDAzMC42NjcgMnoiIGZpbGw9IiMzM2M0ODEiLz48cGF0aCBkPSJNMjAgMTZIOHYxMi42NjdBMS4zMzMgMS4zMzMgMCAwMDkuMzMzIDMwaDIxLjMzNEExLjMzMyAxLjMzMyAwIDAwMzIgMjguNjY3VjIzeiIgZmlsbD0iIzE4NWMzNyIvPjxwYXRoIGZpbGw9IiMxMDdjNDEiIGQ9Ik0yMCAxNmgxMnY3SDIweiIvPjxwYXRoIGQ9Ik0xNi42NjcgN0g4djE5aDguNjY3QTEuMzM3IDEuMzM3IDAgMDAxOCAyNC42NjdWOC4zMzNBMS4zMzcgMS4zMzcgMCAwMDE2LjY2NyA3eiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTUuNjY3IDhIOHYxOWg3LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTcgMjUuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNS42NjcgOHoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE1LjY2NyA4SDh2MTdoNy42NjdBMS4zMzcgMS4zMzcgMCAwMDE3IDIzLjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDh6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xNC42NjcgOEg4djE3aDYuNjY3QTEuMzM3IDEuMzM3IDAgMDAxNiAyMy42NjdWOS4zMzNBMS4zMzcgMS4zMzcgMCAwMDE0LjY2NyA4eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkYXRhLW5hbWU9IkJhY2sgUGxhdGUiIGQ9Ik0xLjMzMyA4aDEzLjMzNEExLjMzMyAxLjMzMyAwIDAxMTYgOS4zMzN2MTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNC42NjcgMjRIMS4zMzNBMS4zMzMgMS4zMzMgMCAwMTAgMjIuNjY3VjkuMzMzQTEuMzMzIDEuMzMzIDAgMDExLjMzMyA4eiIgZmlsbD0iIzEwN2M0MSIvPjxwYXRoIGQ9Ik0zLjUzMyAyMWwzLjIzNi01LjAxNEwzLjgwNSAxMUg2LjE5bDEuNjE4IDMuMTg3cS4yMjMuNDUzLjMwNy42NzZoLjAyMXEuMTYtLjM2Mi4zMzUtLjcwNEwxMC4yIDExaDIuMTg5bC0zLjA0IDQuOTU4TDEyLjQ2NiAyMWgtMi4zM2wtMS44NjktMy41YTIuOTIyIDIuOTIyIDAgMDEtLjIyMy0uNDY4aC0uMDI4YTIuMjA3IDIuMjA3IDAgMDEtLjIxNi40NTNMNS44NzcgMjF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjwvZz48L3N2Zz4=',
            nome: 'Excelson',
            link: 'https://www.office.com/launch/excel?auth=1'
        },
        {
            icone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMzAuNjY3IDJIOS4zMzNBMS4zMzMgMS4zMzMgMCAwMDggMy4zMzNWOWwxMiAzLjVMMzIgOVYzLjMzM0ExLjMzMyAxLjMzMyAwIDAwMzAuNjY3IDJ6IiBmaWxsPSIjNDFhNWVlIi8+PHBhdGggZmlsbD0iIzJiN2NkMyIgZD0iTTMyIDlIOHY3bDEyIDMuNUwzMiAxNlY5eiIvPjxwYXRoIGZpbGw9IiMxODVhYmQiIGQ9Ik0zMiAxNkg4djdsMTIgMy41TDMyIDIzdi03eiIvPjxwYXRoIGQ9Ik0zMiAyM0g4djUuNjY3QTEuMzMzIDEuMzMzIDAgMDA5LjMzMyAzMGgyMS4zMzRBMS4zMzMgMS4zMzMgMCAwMDMyIDI4LjY2N3oiIGZpbGw9IiMxMDNmOTEiLz48cGF0aCBkPSJNMTYuNjY3IDdIOHYxOWg4LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTggMjQuNjY3VjguMzMzQTEuMzM3IDEuMzM3IDAgMDAxNi42NjcgN3oiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTE1LjY2NyA4SDh2MTloNy42NjdBMS4zMzcgMS4zMzcgMCAwMDE3IDI1LjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDh6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xNS42NjcgOEg4djE3aDcuNjY3QTEuMzM3IDEuMzM3IDAgMDAxNyAyMy42NjdWOS4zMzNBMS4zMzcgMS4zMzcgMCAwMDE1LjY2NyA4eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTQuNjY3IDhIOHYxN2g2LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTYgMjMuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNC42NjcgOHoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZGF0YS1uYW1lPSJCYWNrIFBsYXRlIiBkPSJNMS4zMzMgOGgxMy4zMzRBMS4zMzMgMS4zMzMgMCAwMTE2IDkuMzMzdjEzLjMzNEExLjMzMyAxLjMzMyAwIDAxMTQuNjY3IDI0SDEuMzMzQTEuMzMzIDEuMzMzIDAgMDEwIDIyLjY2N1Y5LjMzM0ExLjMzMyAxLjMzMyAwIDAxMS4zMzMgOHoiIGZpbGw9IiMxODVhYmQiLz48cGF0aCBkPSJNMTEuOTUgMjFoLTEuOGwtMi4xLTYuOS0yLjIgNi45aC0xLjhsLTItMTBoMS44bDEuNCA3IDIuMS02LjhoMS41bDIgNi44IDEuNC03aDEuN3oiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDMydjMySDB6Ii8+PC9nPjwvc3ZnPg==',
            nome: 'Word',
            link: 'https://www.office.com/launch/word?auth=1'
        },
        {
            icone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMTggMkExNC4wNDEgMTQuMDQxIDAgMDA0IDE2bDE3LjczNyAzLjczN3oiIGZpbGw9IiNlZDZjNDciLz48cGF0aCBkPSJNMTggMmExNC4wNDEgMTQuMDQxIDAgMDExNCAxNGwtNyA0Ljc1OEwxOCAxNnoiIGZpbGw9IiNmZjhmNmIiLz48cGF0aCBkPSJNMTggMzBhMTQuMDQxIDE0LjA0MSAwIDAwMTQtMTRINGExNC4wNDEgMTQuMDQxIDAgMDAxNCAxNHoiIGZpbGw9IiNkMzUyMzAiLz48cGF0aCBkPSJNMTYuNjY2IDdoLTkuMzZhMTMuOTE0IDEzLjkxNCAwIDAwLjkzIDE5aDguNDNBMS4zMzcgMS4zMzcgMCAwMDE4IDI0LjY2N1Y4LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTYuNjY2IDd6IiBvcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0xNS42NjYgOEg2LjU0YTEzLjkwNiAxMy45MDYgMCAwMDIuODQ1IDE5aDYuMjgyQTEuMzM3IDEuMzM3IDAgMDAxNyAyNS42NjdWOS4zMzNBMS4zMzcgMS4zMzcgMCAwMDE1LjY2NiA4eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTUuNjY2IDhINi41NGExMy44OSAxMy44OSAwIDAwLjc2NiAxN2g4LjM2MUExLjMzNyAxLjMzNyAwIDAwMTcgMjMuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNS42NjYgOHoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE0LjY2NiA4SDYuNTRhMTMuODkgMTMuODkgMCAwMC43NjYgMTdoNy4zNjFBMS4zMzcgMS4zMzcgMCAwMDE2IDIzLjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTQuNjY2IDh6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGRhdGEtbmFtZT0iQmFjayBQbGF0ZSIgZD0iTTEuMzMzIDhoMTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNiA5LjMzM3YxMy4zMzRBMS4zMzMgMS4zMzMgMCAwMTE0LjY2NyAyNEgxLjMzM0ExLjMzMyAxLjMzMyAwIDAxMCAyMi42NjdWOS4zMzNBMS4zMzMgMS4zMzMgMCAwMTEuMzMzIDh6IiBmaWxsPSIjYzQzZTFjIi8+PHBhdGggZD0iTTcuOTk3IDExYTQuMTY4IDQuMTY4IDAgMDEyLjc1NS44MDUgMi44NzggMi44NzggMCAwMS45NTYgMi4zMzEgMi43MjYgMi43MjYgMCAwMS0uNDczIDEuNTg4IDMuMTY0IDMuMTY0IDAgMDEtMS4zNDQgMS4xODYgNC41NyA0LjU3IDAgMDEtMi4wMi40MjRoLTEuOTFWMjFINFYxMXpNNS45NiAxNS42ODNoMS42ODdhMi4xOTQgMi4xOTQgMCAwMDEuNDkyLS40NDQgMS4xMDcgMS4xMDcgMCAwMC41MDQtMS4wMjZxMC0xLjY1OS0xLjkzMy0xLjY1OUg1Ljk2eiIgZmlsbD0iI2Y5ZjdmNyIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48L2c+PC9zdmc+',
            nome: 'PowerPoint',
            link: 'https://www.office.com/launch/powerpoint?auth=1'
        },
        {
            icone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNOS4zMzMgMmgyMS4zMzRBMS4zMzMgMS4zMzMgMCAwMTMyIDMuMzMzdjI1LjMzNEExLjMzMyAxLjMzMyAwIDAxMzAuNjY3IDMwSDkuMzMzQTEuMzMzIDEuMzMzIDAgMDE4IDI4LjY2N1YzLjMzM0ExLjMzMyAxLjMzMyAwIDAxOS4zMzMgMnoiIGZpbGw9IiNjYTY0ZWEiLz48cGF0aCBkPSJNMzIgMy4zMzNBMS4zMzMgMS4zMzMgMCAwMDMwLjY2NiAySDkuMzM0QTEuMzMzIDEuMzMzIDAgMDA4IDMuMzMzdjI1LjMzNEExLjMzMyAxLjMzMyAwIDAwOS4zMzMgMzBIMjVsNy0yMXoiIGZpbGw9IiNjYTY0ZWEiLz48cGF0aCBmaWxsPSIjYWU0YmQ1IiBkPSJNMzIgOWgtN3Y3bDMuNSAzLjE5NUwzMiAxNlY5eiIvPjxwYXRoIGZpbGw9IiM5MzMyYmYiIGQ9Ik0zMiAxNmgtN3Y3bDMuNSAzLjM5NUwzMiAyM3YtN3oiLz48cGF0aCBkPSJNMjUgMjNoN3Y1LjY2N0ExLjMzMyAxLjMzMyAwIDAxMzAuNjY3IDMwSDI1di03eiIgZmlsbD0iIzc3MTlhYSIvPjxwYXRoIGQ9Ik0xNi42NjcgN0g4djE5aDguNjY3QTEuMzM3IDEuMzM3IDAgMDAxOCAyNC42NjdWOC4zMzNBMS4zMzcgMS4zMzcgMCAwMDE2LjY2NyA3eiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTUuNjY3IDhIOHYxOWg3LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTcgMjUuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNS42NjcgOHoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE1LjY2NyA4SDh2MTdoNy42NjdBMS4zMzcgMS4zMzcgMCAwMDE3IDIzLjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDh6IiBvcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0xNC42NjcgOEg4djE3aDYuNjY3QTEuMzM3IDEuMzM3IDAgMDAxNiAyMy42NjdWOS4zMzNBMS4zMzcgMS4zMzcgMCAwMDE0LjY2NyA4eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkYXRhLW5hbWU9IkJhY2sgUGxhdGUiIGQ9Ik0xLjMzMyA4aDEzLjMzNEExLjMzMyAxLjMzMyAwIDAxMTYgOS4zMzN2MTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNC42NjcgMjRIMS4zMzNBMS4zMzMgMS4zMzMgMCAwMTAgMjIuNjY3VjkuMzMzQTEuMzMzIDEuMzMzIDAgMDExLjMzMyA4eiIgZmlsbD0iIzc3MTlhYSIvPjxwYXRoIGQ9Ik00LjAwMSAxMWgyLjEzbDMuNjU2IDYuNzMycS4yODYuNDM1LjQzLjdoLjAyNmE5LjQ5MyA5LjQ5MyAwIDAxLS4wNi0xLjMyNlYxMWgxLjgxNnYxMGgtMS45OTRsLTMuODEzLTYuNjNhNS4xMzMgNS4xMzMgMCAwMS0uMzg4LS42ODZINS43N2ExMy42MjggMTMuNjI4IDAgMDEuMDU1IDEuNDU2VjIxSDR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjwvZz48L3N2Zz4=',
            nome: 'OneNote',
            link: 'https://www.onenote.com/'
        },
        {
            icone: ' data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMjguNTk2IDJIMTEuNDA0QTEuNDA0IDEuNDA0IDAgMDAxMCAzLjQwNFY1bDkuNjkgM0wzMCA1VjMuNDA0QTEuNDA0IDEuNDA0IDAgMDAyOC41OTYgMnoiIGZpbGw9IiMwMzY0YjgiLz48cGF0aCBkPSJNMzEuNjUgMTcuNDA1QTExLjM0MSAxMS4zNDEgMCAwMDMyIDE2YS42NjYuNjY2IDAgMDAtLjMzMy0uNTc2bC0uMDEzLS4wMDgtLjAwNC0uMDAyLTEwLjgzOC02LjE3NWExLjQ5OSAxLjQ5OSAwIDAwLS4xNDUtLjA4MiAxLjUgMS41IDAgMDAtMS4zMzQgMCAxLjQ5IDEuNDkgMCAwMC0uMTQ1LjA4Mkw4LjM1IDE1LjQxNWwtLjAwNC4wMDItLjAxMi4wMDdBLjY2Ni42NjYgMCAwMDggMTZhMTEuMzQ0IDExLjM0NCAwIDAwLjM1IDEuNDA1bDExLjQ5MiA4LjQwNXoiIGZpbGw9IiMwYTI3NjciLz48cGF0aCBmaWxsPSIjMjhhOGVhIiBkPSJNMjQgNWgtN2wtMi4wMjEgM0wxNyAxMWw3IDZoNnYtNmwtNi02eiIvPjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik0xMCA1aDd2NmgtN3oiLz48cGF0aCBmaWxsPSIjNTBkOWZmIiBkPSJNMjQgNWg2djZoLTZ6Ii8+PHBhdGggZmlsbD0iIzAzNjRiOCIgZD0iTTI0IDE3bC03LTZoLTd2Nmw3IDYgMTAuODMyIDEuNzY4TDI0IDE3eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0xMC4wMzEgNUgzMCIvPjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik0xNyAxMWg3djZoLTd6Ii8+PHBhdGggZmlsbD0iIzA2NGE4YyIgZD0iTTEwIDE3aDd2NmgtN3oiLz48cGF0aCBmaWxsPSIjMDA3OGQ0IiBkPSJNMjQgMTdoNnY2aC02eiIvPjxwYXRoIGQ9Ik0yMC4xOSAyNS4yMThsLTExLjc5My04LjYuNDk1LS44N3MxMC43NDUgNi4xMiAxMC45MDkgNi4yMTJhLjUyOC41MjggMCAwMC40Mi0uMDEybDEwLjkzMy02LjIzLjQ5Ni44Njl6IiBmaWxsPSIjMGEyNzY3IiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0zMS42NjcgMTYuNTc3bC0uMDE0LjAwOC0uMDAzLjAwMi0xMC44MzggNi4xNzRhMS40OTcgMS40OTcgMCAwMS0xLjQ2LjA5MWwzLjc3NCA1LjA2MSA4LjI1NCAxLjc5N3YuMDA0QTEuNDk4IDEuNDk4IDAgMDAzMiAyOC41VjE2YS42NjYuNjY2IDAgMDEtLjMzMy41Nzd6IiBmaWxsPSIjMTQ5MGRmIi8+PHBhdGggZD0iTTMyIDI4LjV2LS43MzhsLTkuOTgzLTUuNjg4LTEuMjA1LjY4N2ExLjQ5NyAxLjQ5NyAwIDAxLTEuNDYuMDkxbDMuNzc0IDUuMDYxIDguMjU0IDEuNzk3di4wMDRBMS40OTggMS40OTggMCAwMDMyIDI4LjV6IiBvcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMzEuOTUgMjguODgzTDIxLjAwNyAyMi42NWwtLjE5NS4xMWExLjQ5NyAxLjQ5NyAwIDAxLTEuNDYuMDkybDMuNzc0IDUuMDYxIDguMjU0IDEuNzk3di4wMDRhMS41MDEgMS41MDEgMCAwMC41Ny0uODN6IiBvcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik04LjM1IDE2LjU5di0uMDFoLS4wMWwtLjAzLS4wMkEuNjUuNjUgMCAwMTggMTZ2MTIuNUExLjQ5OCAxLjQ5OCAwIDAwOS41IDMwaDIxYTEuNTAzIDEuNTAzIDAgMDAuMzctLjA1LjYzNy42MzcgMCAwMC4xOC0uMDYuMTQyLjE0MiAwIDAwLjA2LS4wMiAxLjA0OCAxLjA0OCAwIDAwLjIzLS4xM2MuMDItLjAxLjAzLS4wMS4wNC0uMDN6IiBmaWxsPSIjMjhhOGVhIi8+PHBhdGggZD0iTTE4IDI0LjY2N1Y4LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTYuNjY3IDdIMTAuMDN2Ny40NTZsLTEuNjguOTU4LS4wMDUuMDAyLS4wMTIuMDA3QS42NjYuNjY2IDAgMDA4IDE2di4wMDVWMTZ2MTBoOC42NjdBMS4zMzcgMS4zMzcgMCAwMDE4IDI0LjY2N3oiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTE3IDI1LjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDhIMTAuMDN2Ni40NTZsLTEuNjguOTU4LS4wMDUuMDAyLS4wMTIuMDA3QS42NjYuNjY2IDAgMDA4IDE2di4wMDVWMTZ2MTFoNy42NjdBMS4zMzcgMS4zMzcgMCAwMDE3IDI1LjY2N3oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE3IDIzLjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDhIMTAuMDN2Ni40NTZsLTEuNjguOTU4LS4wMDUuMDAyLS4wMTIuMDA3QS42NjYuNjY2IDAgMDA4IDE2di4wMDVWMTZ2OWg3LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTcgMjMuNjY3eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTYgMjMuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNC42NjcgOEgxMC4wM3Y2LjQ1NmwtMS42OC45NTgtLjAwNS4wMDItLjAxMi4wMDdBLjY2Ni42NjYgMCAwMDggMTZ2LjAwNVYxNnY5aDYuNjY3QTEuMzM3IDEuMzM3IDAgMDAxNiAyMy42Njd6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGRhdGEtbmFtZT0iQmFjayBQbGF0ZSIgZD0iTTEuMzMzIDhoMTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNiA5LjMzM3YxMy4zMzRBMS4zMzMgMS4zMzMgMCAwMTE0LjY2NyAyNEgxLjMzM0ExLjMzMyAxLjMzMyAwIDAxMCAyMi42NjdWOS4zMzNBMS4zMzMgMS4zMzMgMCAwMTEuMzMzIDh6IiBmaWxsPSIjMDA3OGQ0Ii8+PHBhdGggZD0iTTMuODY3IDEzLjQ2OGE0LjE4MSA0LjE4MSAwIDAxMS42NDItMS44MTRBNC45NjUgNC45NjUgMCAwMTguMTE5IDExYTQuNjE3IDQuNjE3IDAgMDEyLjQxMy42MiA0LjE0IDQuMTQgMCAwMTEuNTk4IDEuNzMzIDUuNTk3IDUuNTk3IDAgMDEuNTYgMi41NSA1LjkwMSA1LjkwMSAwIDAxLS41NzcgMi42NjYgNC4yMzkgNC4yMzkgMCAwMS0xLjY0NSAxLjc5NEE0LjggNC44IDAgMDE3Ljk2MyAyMWE0LjcyOSA0LjcyOSAwIDAxLTIuNDY4LS42MjcgNC4yMDQgNC4yMDQgMCAwMS0xLjYxOC0xLjczNiA1LjQ1OSA1LjQ1OSAwIDAxLS41NjctMi41MTkgNi4wNTUgNi4wNTUgMCAwMS41NTctMi42NXptMS43NSA0LjI1OGEyLjcxNiAyLjcxNiAwIDAwLjkyMyAxLjE5NCAyLjQxMSAyLjQxMSAwIDAwMS40NDMuNDM1IDIuNTMzIDIuNTMzIDAgMDAxLjU0MS0uNDQ5IDIuNjAzIDIuNjAzIDAgMDAuODk3LTEuMTk3IDQuNjI2IDQuNjI2IDAgMDAuMjg2LTEuNjY1IDUuMDYzIDUuMDYzIDAgMDAtLjI3LTEuNjg2IDIuNjY5IDIuNjY5IDAgMDAtLjg2Ni0xLjI0IDIuMzg3IDIuMzg3IDAgMDAtMS41MjctLjQ3MyAyLjQ5MyAyLjQ5MyAwIDAwLTEuNDc3LjQzOSAyLjc0MSAyLjc0MSAwIDAwLS45NDQgMS4yMDMgNC43NzYgNC43NzYgMCAwMC0uMDA3IDMuNDR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjwvZz48L3N2Zz4= ',
            nome: 'Outlook',
            link: 'https://outlook.live.com/mail/0/'
        },
        {
            icone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMTIuMjAyIDExLjE5M3YtLjAwMWw2LjcxOCA0LjAyNCA0LjAwMy0xLjY4NUE2LjQ3NyA2LjQ3NyAwIDAxMjUuNSAxM2MuMTQ4IDAgLjI5NC4wMDcuNDM5LjAxNmExMCAxMCAwIDAwLTE4LjA0MS0zLjAxM0w4IDEwYTcuOTYgNy45NiAwIDAxNC4yMDIgMS4xOTN6IiBmaWxsPSIjMDM2NGI4Ii8+PHBhdGggZD0iTTEyLjIwMyAxMS4xOTJBNy45NiA3Ljk2IDAgMDA4IDEwbC0uMTAyLjAwM2E3Ljk5NyA3Ljk5NyAwIDAwLTYuNDYgMTIuNTdMNy4zNiAyMC4wOGwyLjYzNC0xLjEwOCA1Ljg2My0yLjQ2OCAzLjA2Mi0xLjI4OHoiIGZpbGw9IiMwMDc4ZDQiLz48cGF0aCBkPSJNMjUuOTM5IDEzLjAxNkE2LjU3NyA2LjU3NyAwIDAwMjUuNSAxM2E2LjQ3NyA2LjQ3NyAwIDAwLTIuNTc2LjUzMmwtNC4wMDQgMS42ODQgMS4xNjEuNjk1IDMuODA1IDIuMjc5IDEuNjYuOTk0IDUuNjc3IDMuNGE2LjUgNi41IDAgMDAtNS4yODQtOS41Njh6IiBmaWxsPSIjMTQ5MGRmIi8+PHBhdGggZD0iTTI1LjU0NiAxOS4xODRsLTEuNjYtLjk5NC0zLjgwNS0yLjI4LTEuMTYtLjY5NC0zLjA2MyAxLjI4OC01Ljg2MyAyLjQ2OEw3LjM2IDIwLjA4bC01LjkyNCAyLjQ5M0E3Ljk4OSA3Ljk4OSAwIDAwOCAyNmgxNy41YTYuNDk4IDYuNDk4IDAgMDA1LjcyMy0zLjQxNnoiIGZpbGw9IiMyOGE4ZWEiLz48L2c+PC9zdmc+',
            nome: 'OneDrive',
            link: 'https://onedrive.live.com',
            zeraMargin: 'margin: 0;'
        },
        {
            icone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48Y2lyY2xlIGN4PSIxNyIgY3k9IjYiIHI9IjQuNjY3IiBmaWxsPSIjN2I4M2ViIi8+PHBhdGggZD0iTTE2LjY2NyA3SDEyLjQ0bC4wMjEuMDkzLjAwMi4wMDguMDIyLjA4NkE0LjY3MSA0LjY3MSAwIDAwMTggMTAuNTU5VjguMzMzQTEuMzM3IDEuMzM3IDAgMDAxNi42NjcgN3oiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTE1LjY2NyA4aC0yLjg4NEE0LjY2NyA0LjY2NyAwIDAwMTcgMTAuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNS42NjcgOHoiIG9wYWNpdHk9Ii4yIi8+PGNpcmNsZSBkYXRhLW5hbWU9IkhlYWQiIGN4PSIyNy41IiBjeT0iNy41IiByPSIzLjUiIGZpbGw9IiM1MDU5YzkiLz48cGF0aCBkPSJNMzAuNSAxMmgtNy44NjFhLjY0LjY0IDAgMDAtLjY0LjY0djguMTFhNS4xMjEgNS4xMjEgMCAwMDMuOTY3IDUuMDg0QTUuMDA2IDUuMDA2IDAgMDAzMiAyMC45MzhWMTMuNWExLjUgMS41IDAgMDAtMS41LTEuNXoiIGZpbGw9IiM1MDU5YzkiLz48cGF0aCBkPSJNMjUgMTMuNVYyM2E3Ljk5NSA3Ljk5NSAwIDAxLTE0LjkyIDQgNy4xNzMgNy4xNzMgMCAwMS0uNS0xIDguMzY3IDguMzY3IDAgMDEtLjMzLTFBOC4yNCA4LjI0IDAgMDE5IDIzdi05LjVhMS40OTggMS40OTggMCAwMTEuNS0xLjVoMTNhMS40OTggMS40OTggMCAwMTEuNSAxLjV6IiBmaWxsPSIjN2I4M2ViIi8+PHBhdGggZD0iTTE1LjY2NyA4aC0yLjg4NEE0LjY2NyA0LjY2NyAwIDAwMTcgMTAuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNS42NjcgOHoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE4IDEydjEyLjY3YTEuMzIgMS4zMiAwIDAxLTEuMDQgMS4yOS45NjYuOTY2IDAgMDEtLjI5LjA0SDkuNThhOC4zNjcgOC4zNjcgMCAwMS0uMzMtMUE4LjI0IDguMjQgMCAwMTkgMjN2LTkuNWExLjQ5OCAxLjQ5OCAwIDAxMS41LTEuNXoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTE3IDEydjEzLjY3YS45NjcuOTY3IDAgMDEtLjA0LjI5QTEuMzIgMS4zMiAwIDAxMTUuNjcgMjdoLTUuNTlhNy4xNzMgNy4xNzMgMCAwMS0uNS0xIDguMzY3IDguMzY3IDAgMDEtLjMzLTFBOC4yNCA4LjI0IDAgMDE5IDIzdi05LjVhMS40OTggMS40OTggMCAwMTEuNS0xLjV6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xNyAxMnYxMS42N0ExLjMzNiAxLjMzNiAwIDAxMTUuNjcgMjVIOS4yNUE4LjI0IDguMjQgMCAwMTkgMjN2LTkuNWExLjQ5OCAxLjQ5OCAwIDAxMS41LTEuNXoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTEwLjUgMTJBMS40OTggMS40OTggMCAwMDkgMTMuNVYyM2E4LjI0IDguMjQgMCAwMC4yNSAyaDUuNDJBMS4zMzYgMS4zMzYgMCAwMDE2IDIzLjY3VjEyeiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkYXRhLW5hbWU9IkJhY2sgUGxhdGUiIGQ9Ik0xLjMzMyA4aDEzLjMzNEExLjMzMyAxLjMzMyAwIDAxMTYgOS4zMzN2MTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNC42NjcgMjRIMS4zMzNBMS4zMzMgMS4zMzMgMCAwMTAgMjIuNjY3VjkuMzMzQTEuMzMzIDEuMzMzIDAgMDExLjMzMyA4eiIgZmlsbD0iIzRiNTNiYyIvPjxwYXRoIGQ9Ik0xMS45OCAxMi45NzVIOC45OXY4LjAySDcuMDI4di04LjAySDQuMDJ2LTEuOTdoNy45NnoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDMydjMySDB6Ii8+PC9nPjwvc3ZnPg==',
            nome: 'Teams',
            link: 'https://teams.live.com/'
        },
        {
            icone: 'data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNNS4xMSAxMC4zMUwuMzYgMTUuMDZhMS4zMyAxLjMzIDAgMDAwIDEuODhMNyAyMy41N2w2LjYzLTYuNjNMNyAxMC4zMWExLjMzIDEuMzMgMCAwMC0xLjg5IDB6IiBmaWxsPSIjMTg1YWJkIi8+PHBhdGggZD0iTTMxLjY0IDguNDNsLTQuNzUtNC43NWExLjMzIDEuMzMgMCAwMC0xLjg4IDBsLTUuNjkgNS42OUwxMi42OCAxNiA3IDIxLjY5YTEuMzMgMS4zMyAwIDAwMCAxLjg4bDQuNzUgNC43NWExLjMzIDEuMzMgMCAwMDEuODggMGw1LjctNS42OUwyNiAxNmw1LjY5LTUuNjlhMS4zMyAxLjMzIDAgMDAtLjA1LTEuODh6IiBmaWxsPSIjNDFhNWVlIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjwvc3ZnPg==',
            nome: 'ToDo',
            link: 'https://to-do.microsoft.com/tasks/?auth=1',
            zeraMargin: 'margin: 0;'
        },
        {
            icone: 'https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Skype_24x.svg',
            nome: 'Skipe',
            link: 'https://web.skype.com/?source=owa',
            zeraMargin: 'margin: 0;'
        },
        {
            icone: 'https://assets.msn.com/staticsb/statics/latest/icons/office-icons/Calendar_24x.svg',
            nome: 'Calendar',
            link: 'https://outlook.live.com/calendar/',
            zeraMargin: 'margin: 0;'
        },
        
    ]
    /* -------------------------------------------- */
    
     /* -------------- Abre o menu com todas os apps ------ */
    if (document.querySelector('.menuMicro') != null ){
        document.querySelector('.menuMicro').remove();
    } else {

        document.querySelector('body').innerHTML += `
        <div class="menuMicro" >
            <div id="micro-apps-scroll">
                <div id="micro-in-scroll">
                </div>

                <button id="addGoogle-button" onclick="userAppsMicro()"> Adicionar apps da Microsoft </button>
            </div>
            <form action="https://www.office.com/apps?auth=1" target="_blank">
                <button type="submit"> Mais da Microsoft</button>
            </form>
        
        </div>
        `
        for (microImprime in formsMicro0){
            document.querySelector('#micro-in-scroll').innerHTML += `
            <div id="micro-in-scroll-div">
                <a href="${formsMicro0[microImprime].link}" target="_blank" class="icones">  
                    <div class="icones-view" >
                    <img id="img-micro" src="${formsMicro0[microImprime].icone}" style="${formsMicro0[microImprime].zeraMargin }" >
                    
                    </div>
                    <div class="icones-fundo">  </div>
                </a>
                <input value="${formsMicro0[microImprime].nome}" class="nameAppMicro"></input> 
            </div> `
        }
    }
    /* ---------------------------------------------------- */
}

//Nova tentativa de commit