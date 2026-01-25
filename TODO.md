# Add to Wishlist Functionality Task

## Completed Tasks
- [x] Add wishlist icon in navigation bar next to Profile and Cart in index.html
- [x] Fix event bubbling in products section by adding event.stopPropagation() to wishlist button
- [x] Fix event bubbling in furniture section by adding event.stopPropagation() to wishlist button
- [x] Fix event bubbling in laptop section by adding event.stopPropagation() to wishlist button
- [x] Verify shoes section already has event.stopPropagation() (no changes needed)

## Summary
- Added a wishlist icon using heart.png asset in the nav-icons div, linking to Home/Dashbord/wishlist.html
- Fixed event bubbling issues in product cards where clicking the wishlist icon would also open the product page
- The addToWishlist function stores products in localStorage, and wishlist.html displays them
