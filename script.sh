cd src/app/

rm -rf components
rm -rf pages
rm -rf interfaces
rm -rf services
rm -rf ../public/*

mkdir components
mkdir pages
mkdir interfaces
mkdir services

cd components

ng g c breadcrumbs --skip-tests
ng g c contact-item --skip-tests
ng g c contacts --skip-tests
ng g c copyright --skip-tests
ng g c footer --skip-tests
ng g c header --skip-tests
ng g c project-item --skip-tests
ng g c service-item --skip-tests
ng g c top-button --skip-tests
ng g c top-header --skip-tests

cd ../pages
ng g c home-page --skip-tests
ng g c services-page --skip-tests
ng g c projects-page --skip-tests
ng g c contact-page --skip-tests

cd ../interfaces
touch content.interfaces.ts

cd ../pages/home-page
mkdir components
cd components

ng g c about --skip-tests
ng g c about-item --skip-tests
ng g c big-button --skip-tests
ng g c cta --skip-tests
ng g c features --skip-tests
ng g c features-item --skip-tests
ng g c hero --skip-tests
ng g c offer --skip-tests
ng g c partners --skip-tests
ng g c section-title --skip-tests
ng g c services --skip-tests
ng g c slider --skip-tests
ng g c testimonials --skip-tests

cd ../../services-page
mkdir components
cd components

ng g c services-gallery --skip-tests

cd ../../projects-page

mkdir components
cd components

ng g c project-gallery --skip-tests

cd ../../../services

touch content.service.ts


old_base_path="/Users/juliagrinko/Websites/handyman"
new_base_path="/Users/juliagrinko/Websites/rhconstructs"

old_path="$old_base_path/src/app"
new_path="$new_base_path/src/app"


cp $old_path/services/content.service.ts $new_path/services/content.service.ts

cp $old_path/interfaces/content.interfaces.ts $new_path/interfaces/content.interfaces.ts

# Copy all TypeScript and HTML files from components folder, excluding spec files
cd "$old_path/components" && find . -type f \( -name "*.ts" -o -name "*.html" \) ! -name "*.spec.ts" | while read file; do
    mkdir -p "$new_path/components/$(dirname "$file")"
    cp -f "$file" "$new_path/components/$file"
done

# Copy page component files (*.component.ts/html), excluding spec files
cd "$old_path/pages" && find . -maxdepth 1 -type f \( -name "*.component.ts" -o -name "*.component.html" \) ! -name "*.spec.ts" | while read file; do
    mkdir -p "$new_path/pages/$(dirname "$file")"
    cp -f "$file" "$new_path/pages/$file"
done

# Copy all files from within page subfolders (like components inside home-page), excluding spec files
cd "$old_path/pages" && find . -mindepth 2 -type f \( -name "*.ts" -o -name "*.html" \) ! -name "*.spec.ts" | while read file; do
    mkdir -p "$new_path/pages/$(dirname "$file")"
    cp -f "$file" "$new_path/pages/$file"
done





cp $old_path/app.component.html $new_path/app.component.html
cp $old_path/app.component.ts $new_path/app.component.ts

cp $old_path/app.routes.ts $new_path/app.routes.ts

cp $old_path/app.config.ts $new_path/app.config.ts

cp -r $old_base_path/public/* $new_base_path/public/

cp $old_base_path/angular.json $new_base_path/angular.json





