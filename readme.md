## Experimental Cryptocurrency Trading strategy optimizer

**Work in progress**. 
**DISCLAIMER**: This is a form of code "sketch book", where i experiment. 
My main goal was to create a flask API that would connect a Genetic Algorithm to a trading strategy, and then backtest that strategy on old market data.
It ended up including all kind of other things as Markov Model image plot generation and drag n drop functionality.

The code is NOT clean, and frontend is NOT pretty this is first and formost a way of rapid prototyping, as i quickly moved from one subject to the next, trying not get lost in details and therefore leaving parts of the code unpolished and unoptimized. 
I gained alot of insights in the project that i will bring with me into the new version of the project, that i am embarking on as a semester project.

The new project will include

- Typescript frontend with drag n drop
- MongoDB for making the frontend persistent
- TimescaleDB for working with timeseries data
- .NET for a maintainable OOP backend
- Python microservice for ML/algorithms/data manipulation

## Features
Current features
- Login
- Markov Model image generation
- Price chart
- Calculation of techinal indicators on Dataframe
- Backtesting with Genetic Optimization algorithm - not connected to frontend yet
- Frontend configurations is saved in Sqlite database

init database:

```
flask --app main_app init-db
```

run flask app

```
flask --app main_app run --debug

```



