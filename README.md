Welcome to AvaNiceDay Foundation
================================

How to contribute
-----------------
1. Fetch upstream and merge upstream/develop with your origin/develop
2. Make the styling changes you want.
3. Test the changes locally using the process outlined below.
4. Create a commit.
5. Update the package.json version, and tag your new version with the same using `git tag`
6. Push your new commit and tag using `git push upstream --tags`
7. Issue a PR against the consuming application in which you update the tag reference for this package to your new tag.

Testing changes locally
-----------------------
1. From the AvaNiceDay-Foundation working folder, run `npm link`
2. From CUP or the other repo in which you are pulling the changes, run `npm link @avalara/ava-nice-day-foundation`
3. Use `npm unlink` in each location in the same way, to remove the symlink and reference.
