const startingStatRolls = () => {
    // Function to roll a single die
    const rollDie = () => Math.floor(Math.random() * 6) + 1;

    // Roll 4 dice
    const rolls = Array.from({ length: 4 }, rollDie);

    console.log("Rolling 4d6...");

    // Animation sequence
    let animationFrames = ["🎲", "🎲", "🎲", "🎲"];
    let frameIndex = 0;
    const rollAnimation = setInterval(() => {
        process.stdout.write(`\r${animationFrames[frameIndex % animationFrames.length]} `);
        frameIndex++;
    }, 150);

    setTimeout(() => {
        clearInterval(rollAnimation); // Stop animation
        console.log("\nRolls: ", rolls.join(", "));

        // Sort rolls to pick the top 3
        const topThree = rolls.sort((a, b) => b - a).slice(0, 3);
        const total = topThree.reduce((sum, roll) => sum + roll, 0);

        console.log(`Top 3 Rolls: ${topThree.join(", ")}`);
        console.log(`Total of Top 3: ${total}`);
    }, 3000); // End animation after 3 seconds
};

// Run the function
startingStatRolls();
